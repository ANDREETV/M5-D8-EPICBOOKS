import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from "react-bootstrap/Row";
import BookHorror from '../components/componentsBooks/BookHorror';

export default function Horror({filterHorror}) {
  return (
    <div>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand style={{fontSize:'3em'}}>Horror</Navbar.Brand>
        </Container>
      </Navbar>

      <Container fluid className='mt-5 pt-5'>
                <Row className="d-flex justify-content-center">
                    {
                        filterHorror.map((book, i) => (
                            <BookHorror book={book} key={i} />
                        ))
                    }
                </Row>
        </Container>
    </div>
  )
}
