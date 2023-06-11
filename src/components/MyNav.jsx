
// bootstrap 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from "react-bootstrap/Row";

//  hooks
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SearchInput(props) {
    
    const [searchText, setSearchText] = useState('')

    function handleChangeInput(e) {
        const inputValue = e.target.value;
        setSearchText(inputValue);
        props.handleQueryChange(inputValue)
    }


    return(
        <Row className="d-flex justify-content-center gap-1 mb-5">
        <label className="w-50 d-flex "> <b>Cerca dei libri:</b></label>
        <input  type="text" className="text-center w-75  p-2" placeholder="Cerca i libri" value={searchText}  onChange={handleChangeInput} />
        </Row>
    )
}


export default function MyNav(props) {

    function handleQueryChange(value) {
        props.handleQueryChange(value)
    }

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">EpiBooks</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='nav-link' to="/">Home</Link>
                        <Link className='nav-link'  to="/about">About</Link>
                        <Link className='nav-link'  to="/browse">Browse</Link>
                        <NavDropdown title="Categoria Films" id="basic-nav-dropdown">
                            <Link className='dropdown-item' to="/fantasy">Fantasy</Link>
                            <NavDropdown.Divider />
                            <Link className='dropdown-item' to="/history">History </Link>
                            <NavDropdown.Divider />
                            <Link className='dropdown-item' to="/horror">Horror</Link>
                            <NavDropdown.Divider />
                            <Link className='dropdown-item' to="/romance">Romance</Link>
                            <NavDropdown.Divider />
                            <Link className='dropdown-item' to="/scifi">Scifi</Link>
                        </NavDropdown>
                    </Nav>
                    <SearchInput handleQueryChange={handleQueryChange} />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
