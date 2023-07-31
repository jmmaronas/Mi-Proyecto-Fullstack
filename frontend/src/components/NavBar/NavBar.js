import { Button, Nav, Navbar, Container } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import Brand from './Brand.js';
import { adminLinks, links, useUserContext } from '../../services/contextServices.js';
import { useState, useEffect } from 'react';
import LinkItem from './LinkItem.js';

function NavBar() {
  const [linksValidated, setLinksValidated] = useState(links)
  const { user, logout } = useUserContext()
  const navigate = useNavigate()

  const signOff = () => {
    logout()
    setLinksValidated(links)
    navigate("/")
  }
  useEffect(() => {
    if(user?.role==="admin")setLinksValidated([...links, ...adminLinks])    
  }, [user])

  return (

    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className='fs-3' href="/">P-FStack</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            { linksValidated.map(link => <LinkItem key={"link"+link.id} link={link} />)}
          </Nav>
          <h3 className='mx-3 text-success'>{user?.username}</h3>
          {user?.username ?
            <div className='d-flex justify-content-around gap-2 mx-2'>
              <Button onClick={signOff} variant='outline-danger'>Logout</Button>
            </div>
            :
            <div className='d-flex justify-content-around gap-2 mx-2'>
              <Button as={NavLink} to="/login" variant='outline-secondary'>Sign In</Button>
              <Button as={NavLink} to="/signup" variant='secondary'>Sign Up</Button>
            </div>
          }
        </Navbar.Collapse>
        <Brand />
      </Container>
    </Navbar>
  );
}

export default NavBar