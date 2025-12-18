import { Table, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

export function TableProducts({ products }) {
    const header = ["#", "Nombre", "Precio", "Categoria", "Imagen", "Acciones"]
    const navigate = useNavigate();

    const handlerEliminar = async (id) => {
        const confirmar = window.confirm("¿Estás seguro de que deseas eliminar este producto?");
        
        if (confirmar) {
            await fetch(`http://localhost:3001/productos/${id}`, {
                method: "DELETE"
            });
            
            window.location.reload(); 
        }
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    {header.map(e => <th key={e}>{e}</th>)}
                </tr>
            </thead>
            <tbody>
                {products.map(e => (
                    <tr key={e._id}>
                        <td>{e._id}</td>
                        <td>{e.nombre}</td>
                        <td>{e.precio}</td>
                        <td>{e.categoria}</td>
                        <td><img src={e.imagen} alt="" width={50} /> </td>
                        <td>
                            <Button 
                                
                                
                                onClick={() => navigate(`/update/${e._id}`)}
                            >
                                Update
                            </Button>

                            <Button 
                                
                                onClick={() => handlerEliminar(e._id)}
                            >
                                Delete
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}