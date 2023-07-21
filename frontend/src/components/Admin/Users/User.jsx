import { Button } from "react-bootstrap";
import { NavLink } from 'react-router-dom'

export default function User({ user, onDelete }) {
    return (
        <tr>
            <td>{user._id}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td className="d-flex gap-1">
                <Button as={NavLink} to={`/services/users/${user._id}`} variant="primary">edit</Button>
                <Button onClick={()=>onDelete(user._id)} variant="danger">Del</Button>
            </td>
            
        </tr>
    )
}