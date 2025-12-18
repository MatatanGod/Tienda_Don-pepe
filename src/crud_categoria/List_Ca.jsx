import { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export function List_Ca() {
    const [categorias, setCategorias] = useState([]);
    const navigate = useNavigate();

    // 1. Cargar datos
    useEffect(() => {
        fetch('http://localhost:3001/categorias')
            .then(res => res.json())
            .then(data => setCategorias(data));
    }, []);

    // 2. Función Borrar
    const eliminar = async (id) => {
        if (window.confirm("¿Borrar categoría?")) {
            await fetch(`http://localhost:3001/categorias/${id}`, { method: 'DELETE' });
            // Filtrar para borrar de la vista
            setCategorias(categorias.filter(c => c._id !== id));
        }
    };

    return (
        <div className="container mt-4">
            <h2>Categorías</h2>
            <Button onClick={() => navigate("/categorias/create")} className="mb-3">
                + Nueva Categoría
            </Button>

            <Table bordered>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {categorias.map(c => (
                        <tr key={c._id}>
                            <td>{c.nombre}</td>
                            <td>
                                <Button variant="warning" onClick={() => navigate(`/categorias/update/${c._id}`)}>
                                    Editar
                                </Button>
                                {' '}
                                <Button variant="danger" onClick={() => eliminar(c._id)}>
                                    Borrar
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Button variant="link" onClick={() => navigate("/")}>Volver a Productos</Button>
        </div>
    );
}