import { Button, Table } from 'react-bootstrap'
import { useState } from 'react'
import { delProduct } from '../../../services/productServices'
import ProductAdmin from './ProdcutAdmin'
import { useUserContext } from '../../../services/contextServices'
import { Link } from 'react-router-dom'

export default function ProductAdminList({ products }) {
    const { token } = useUserContext()

    const [items, setItems] = useState(products)
    const onDelete = (id) => {
        setItems(prev => prev.filter(item => item._id !== id))
        delProduct(id, token)
    }
    return (
        <div className='container-fluid col-11'>
            <Button as={Link} variant='danger' to='/services/new'>Agregar producto</Button>
            <Table responsive="sm">
                <thead>
                    <tr className='text-center'>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Precio</th>
                        <th>Url Imagen</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(prodcut => <ProductAdmin key={prodcut._id} prodcut={prodcut} onDelete={onDelete} />)}
                </tbody>
            </Table>
        </div>
    )
}