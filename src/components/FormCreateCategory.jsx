import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export function FormCreateCategory() {
    const [nombre, setNombre] = useState('');
    const navigate = useNavigate();

    const handlerRegistrar = async (event) => {
        event.preventDefault();

        // Enviamos la información al backend
        await fetch('http://localhost:3001/categorias', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ nombre })
        });
        navigate("/categorias");
    }

    return (
        <Form onSubmit={handlerRegistrar}>
            <Form.Group className='mb-3' controlId='createCategory.nombre'>
                <Form.Label>Nombre</Form.Label>
                <Form.Control type='text' value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </Form.Group>
            
            <Button type="submit" variant="success">Guardar Categoría</Button>
        </Form>
    );
}