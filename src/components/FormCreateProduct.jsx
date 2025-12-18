import { useState } from 'react';
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

export function FormCreateProduct() {

    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState('')
    const [categoria, setCategoria] = useState('')
    const [imagen, setImagen] = useState('')

    const navigate = useNavigate()

    const handlerRegistrar = async (event) => {
        event.preventDefault();

        await fetch('http://localhost:3001/productos', {

            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nombre,
                precio,
                categoria,
                imagen
            })
        })

        navigate("/")
    }

    return (
        <Form onSubmit={handlerRegistrar}>
            <Form.Group className='mb-3' controlId='createProduct.nombre'>
                <Form.Label>Nombre</Form.Label>
                <Form.Control type='text' value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='createProduct.precio'>
                <Form.Label>Precio</Form.Label>
                <Form.Control type='number' value={precio} onChange={(e) => setPrecio(e.target.value)} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='createProduct.categoria'>
                <Form.Label>Categoría</Form.Label>
                <Form.Control type='text' value={categoria} onChange={(e) => setCategoria(e.target.value)} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='createProduct.imagen'>
                <Form.Label>Imágen</Form.Label>
                <Form.Control type='text' value={imagen} onChange={(e) => setImagen(e.target.value)} />
            </Form.Group>
            <Button type="submit">Registrar</Button>
        </Form >
    )
}