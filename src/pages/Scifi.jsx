import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from "react-bootstrap/Row";
import BookScifi from '../components/componentsBooks/BookScifi';

export default function Scifi({filterScifi}) {
    return (
        <>
            <Navbar expand="lg" variant="light" bg="light">
                <Container>
                    <Navbar.Brand style={{ fontSize: '3em' }}>Scifi</Navbar.Brand>
                </Container>
            </Navbar>

            <Container fluid className='mt-5 pt-5'>
                <Row className="d-flex justify-content-center">
                    {
                        filterScifi.map((book, key) => (
                            <BookScifi book={book} key={key} />
                        ))
                    }
                </Row>
            </Container>
        </>


    )
}
