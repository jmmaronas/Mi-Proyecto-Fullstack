import { Button } from "react-bootstrap";

export default function CartItem({ product, handleDelete }) {
    return (
        <tr>
            <td>{product.cantidad}</td>
            <td>{product.title}</td>
            <td>$ {product.price}</td>
            <td>$ {product.price * product.cantidad}</td>
            <td><Button onClick={() => handleDelete(product._id)} variant="danger">x</Button></td>
        </tr>
    )
}