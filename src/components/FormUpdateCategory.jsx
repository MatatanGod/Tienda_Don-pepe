import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate} from 'react-router-dom';

export function FormUpdateCategory() {
    const [nombre, setNombre] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:3001/categorias/${id}`)
            .then(res => res.json())
            .then(data => {
                setNombre(data.nombre);
            })
            .catch(err => console.error("Error al obtener la categoría:", err));
    }, [id]);
    const handlerActualizar = async (event) => {
        event.preventDefault();

        await fetch(`http://localhost:3001/categorias/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nombre })
        });

        navigate("/categorias");
    }

    return (
        <Form onSubmit={handlerActualizar}>
            <Form.Group className='mb-3' controlId='updateCategory.nombre'>
                <Form.Label>Nombre de la Categoría</Form.Label>
                <Form.Control 
                    type='text' 
                    value={nombre} 
                    onChange={(e) => setNombre(e.target.value)} 
                    required 
                />
            </Form.Group>
            <Button type="submit" variant="warning">Actualizar Categoría</Button>
            <Button variant="secondary" className="ms-2" onClick={() => navigate("/categorias")}>
                Cancelar
            </Button>
        </Form>
    );
}