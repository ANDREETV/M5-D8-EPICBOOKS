import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from "react-bootstrap/Row";
import BookFantasy from '../components/componentsBooks/BookFantasy';

export default function Fantasy({filterFantasy}) {
    return (
        <div>
          <Navbar expand="lg" variant="light" bg="light">
            <Container>
              <Navbar.Brand style={{fontSize:'3em'}}>Fantasy</Navbar.Brand>
            </Container>
          </Navbar>
    
          <Container fluid className='mt-5 pt-5'>
                    <Row className="d-flex justify-content-center">
                        {
                            filterFantasy.map((book, i) => (
                                <BookFantasy book={book} key={i} />
                            ))
                        }
                    </Row>
            </Container>
        </div>
      )
}