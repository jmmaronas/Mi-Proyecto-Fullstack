import { Button, Nav, Navbar, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Link from './Link.js';
import Brand from './Brand.js';
import { useUserContext } from '../../services/services.js';

function NavBar({ links }) {
  const { user } = useUserContext()  
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Comision-43315</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {links.map(link => <Link key={link.id} link={link} />)}
          </Nav>
          <h3>{user.email}</h3>
          <div className='d-flex justify-content-around gap-2 mx-2'>
            <Button as={NavLink} to="/login" variant='outline-secondary'>Sign In</Button>
            <Button as={NavLink} to="/signup" variant='secondary'>Sign Up</Button>
          </div>
        </Navbar.Collapse>
        <Brand />
      </Container>
    </Navbar>
  );
}

export default NavBar