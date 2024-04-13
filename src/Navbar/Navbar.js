import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import { Menubar } from 'primereact/menubar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import "jquery/dist/jquery.min.js";
import 'bootstrap/dist/js/bootstrap.bundle'

import 'primeicons/primeicons.css';
        
class MyNavbar extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
             items : [
                {
                    label: 'Home',
                    icon: 'pi pi-home'
                },
                {
                    label: 'Features',
                    icon: 'pi pi-star'
                },
                {
                    label: 'Projects',
                    icon: 'pi pi-search',
                    items: [
                        {
                            label: 'Components',
                            icon: 'pi pi-bolt'
                        },
                        {
                            label: 'Blocks',
                            icon: 'pi pi-server'
                        },
                        {
                            label: 'UI Kit',
                            icon: 'pi pi-pencil'
                        },
                        {
                            label: 'Templates',
                            icon: 'pi pi-palette',
                            items: [
                                {
                                    label: 'Apollo',
                                    icon: 'pi pi-palette'
                                },
                                {
                                    label: 'Ultima',
                                    icon: 'pi pi-palette'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: 'Contact',
                    icon: 'pi pi-envelope'
                }
            ]
        
        }
    }
    render()
    {
      return(
        <>
        {
    //       <div className="card">
    //       <Menubar model={this.state.items} />
    //   </div>

    <Navbar expand="lg" className="bg-body-tertiary mr-auto">
    <Container>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home">Join Us</Nav.Link>
          <Nav.Link href="#link">Classes</Nav.Link>
          <Nav.Link href="">Products</Nav.Link>
          <Nav.Link href="">Contact Us</Nav.Link>
          <Nav.Link href=""><span className="pi pi-user"></span></Nav.Link>
          <Nav.Link href=""><span className="pi pi-cart-plus"></span></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
        }
        </>
      );
    }
}
export default MyNavbar;