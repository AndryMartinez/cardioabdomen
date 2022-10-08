import React from 'react'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { Card, Col, NavDropdown } from 'react-bootstrap';
import { toast } from 'react-toastify';
import Search from '../Search';
import useStrappi from '../../hooks/useStrappi';

const NavBar = ({ search, setSearch }) => {
    const { data, loading, error } = useStrappi('categories')

    return (
        <Navbar className='navbar shadow' expand="lg" >
            <Container>
                <Link to={'/'} className='brand me-5'>
                    <Navbar.Brand className='brand'>
                        Cardio Abdomen
                    </Navbar.Brand>
                </Link>

                <Col lg='5' className='ms-4'>
                    <Card className='Card border-1 rounded-3'>
                        <Search search={search} setSearch={setSearch} />
                    </Card>
                </Col>

                <Navbar.Collapse id="basic-navbar-nav ">
                    <Nav className="ms-auto">
                        <Nav.Link className='nav-item'>
                            <Link to={'/'} className='nav-link'>Inicio</Link>
                        </Nav.Link>
                        <Nav.Link className='nav-item'>
                            <Link onClick={() => toast.info("Estará disponible pronto!")} className='nav-link'>Productos</Link>
                        </Nav.Link>
                        <Nav.Link className='nav-item'>
                            <NavDropdown title="Categorias" id="basic-nav-dropdown">
                                {
                                    data?.data?.map((categorie) => (<NavDropdown.Item href="#action/3.1">
                                        {categorie.attributes.name}
                                    </NavDropdown.Item>))
                                }
                            </NavDropdown>
                        </Nav.Link>
                        <Nav.Link className='nav-item'>
                            <Link to={'/contacto'} className='nav-link'>Contacto</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;