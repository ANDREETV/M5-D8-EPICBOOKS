import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from "react-bootstrap/Row";
import BookHistory from '../components/componentsBooks/BookHistory';

export default function History({filterHistory}) {
    return (
        <div>
          <Navbar expand="lg" variant="light" bg="light">
            <Container>
              <Navbar.Brand style={{fontSize:'3em'}}>History</Navbar.Brand>
            </Container>
          </Navbar>
    
          <Container fluid className='mt-5 pt-5'>
                    <Row className="d-flex justify-content-center">
                        {
                            filterHistory.map((book, i) => (
                                <BookHistory book={book} key={i} />
                            ))
                        }
                    </Row>
            </Container>
        </div>
      )
}
