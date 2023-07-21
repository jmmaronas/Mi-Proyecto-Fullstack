import {Nav} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'


export default function LinkItem({link}){
    return <Nav.Link as={NavLink} to={link.href}>{link.description}</Nav.Link>
}