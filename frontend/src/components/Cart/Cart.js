import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../services/services.js';
import CartItem from './CartItem.js';

export default function Cart() {
    const { cart, delToCart } = useCartContext()    
    const handleDelete = (product)=>{
        delToCart(product)
    }
    return (
        <div className="container text-center">
            <h1 className='my-5'>Carrito de Compras</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Cantidad</th>
                        <th>Detalle</th>
                        <th>Precio</th>
                        <th>Subtotal</th>
                        <th>Quitar</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((product, index) => <CartItem key={index} product={product} handleDelete={handleDelete}/>)}
                </tbody>
            </Table>
            <Button as={Link} to='/checkout' className='w-100' variant='primary'>Realiza Compra</Button>
        </div>
    );
}
