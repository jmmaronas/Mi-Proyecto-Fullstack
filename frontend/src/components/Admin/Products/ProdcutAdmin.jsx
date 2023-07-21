import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ProductAdmin({ prodcut, onDelete }) {
    return (
        <tr>
            <td>{prodcut._id}</td>
            <td>{prodcut.title}</td>
            <td>{prodcut.description}</td>
            <td>$ {prodcut.price}</td>
            <td>{prodcut.image}</td>
            <td className="d-flex gap-1">
                <Button as={Link} to={`/services/products/${prodcut._id}`} variant="primary">edit</Button>
                <Button onClick={() => onDelete(prodcut._id)} variant="danger">Del</Button>
            </td>
        </tr>
    )
}