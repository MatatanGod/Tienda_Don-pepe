import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { TableProducts } from '../components/TableProducts'

export function List() {
    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        const products = await fetch('http://localhost:3001/productos')
            .then((e) => e.json())
        setProducts(products)
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    const handleDelete = async () => {
        const idParaBorrar = prompt("Ingresa el ID del producto que deseas eliminar:");
        if (idParaBorrar) {
            await fetch(`http://localhost:3001/productos/${idParaBorrar}`, {
                method: 'DELETE'
            })
            fetchProducts() // Recarga la lista
        }
    }

    return (
        <>
            <h1>Listado de Productos</h1>
            <Link to={'/create'}>
                <Button variant='primary'>Registra Producto</Button>
            </Link>
            {
                products.length > 0 ?
                    <TableProducts products={products} />
                    :
                    <h2>No hay productos</h2>
            }
            
            <Link to={'/update'}>
                <Button variant='secondary'>Actualizar Producto</Button>
            </Link>

            
            <Button variant='secondary' onClick={handleDelete} className="ms-2">
                Eliminar Producto
            </Button>
        </>
    )
}