import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

export function FormUpdateProduct() {
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [categoria, setCategoria] = useState('');
    const [imagen, setImagen] = useState('');

    const navigate = useNavigate();
    const { id } = useParams(); //aqui capta el id de la url

    //lista los datos
    useEffect(() => {
        fetch(`http://localhost:3001/productos/${id}`)
            .then(res => res.json())
            .then(data => {
                setNombre(data.nombre);
                setPrecio(data.precio);
                setCategoria(data.categoria);
                setImagen(data.imagen);
            });
    }, [id]);

    // 2. Enviar los nuevos datos con el método PUT
    const handlerActualizar = async (event) => {
        event.preventDefault();

        await fetch(`http://localhost:3001/productos/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nombre, precio, categoria, imagen })
        });

        navigate("/"); // Volver al listado tras el éxito
    }

    return (
        <Form onSubmit={handlerActualizar}>
            <Form.Group className='mb-3'>
                <Form.Label>Nombre</Form.Label>
                <Form.Control type='text' value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Precio</Form.Label>
                <Form.Control type='number' value={precio} onChange={(e) => setPrecio(e.target.value)} />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Categoría</Form.Label>
                <Form.Control type='text' value={categoria} onChange={(e) => setCategoria(e.target.value)} />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Imágen (URL)</Form.Label>
                <Form.Control type='text' value={imagen} onChange={(e) => setImagen(e.target.value)} />
            </Form.Group>
            <Button type="submit" variant="warning">Guardar Cambios</Button>
        </Form >
    );
}