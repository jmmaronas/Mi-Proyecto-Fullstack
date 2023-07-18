import { Table }from "react-bootstrap";
import { useCartContext } from '../../services/services.js';
import CartItem from './CartItem.js';

export default function CartDetail() {
    const { cart, delToCart } = useCartContext()
    const handleDelete = (product) => {
        delToCart(product)
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Cant</th>
                    <th>Detalle</th>
                    <th>Precio</th>
                    <th>Subtotal</th>
                </tr>
            </thead>
            <tbody>
                {cart.map(product => <CartItem key={product._id} product={product} handleDelete={handleDelete} />)}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="3" className="text-center fw-bold fs-3">Total</td>
                    <td colSpan="2" className="text-center fw-bold fs-4">$ {cart.reduce((acc, prod) => acc + (prod.cantidad * prod.price),0)}</td>
                </tr>
            </tfoot>
        </Table>
    )
}