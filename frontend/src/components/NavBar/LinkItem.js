import {Nav} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function LinkItem({link}){
    return <Nav.Link className='fs-5' as={NavLink} to={link.href}>{link.title}</Nav.Link>
}