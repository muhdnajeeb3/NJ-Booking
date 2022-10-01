import React from 'react'
import { Navbar ,Nav} from 'react-bootstrap'
import './Header.css'
import Container from 'react-bootstrap/Container';
import { Button } from 'bootstrap';

function Header() {
  return (
    <>
    <Navbar expand='lg' className='navbar' >
        <Container>
        <Navbar.Brand href='/' className='navbarContainer'> NJ Booking

        </Navbar.Brand>
        <div className="navitems">
          <button className='navbutton'>Register</button>
          <button className='navbutton'>Login</button>
        </div>
       
        

        </Container>
        
    </Navbar>
    
    </>
  )
}

export default Header