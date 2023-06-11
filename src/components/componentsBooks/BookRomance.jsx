import React from 'react'
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';


export default function BookRomance({book, i}) {

    return (
        <Col key={i} md={6} lg={4} xl={3} sm={6}>
            <Card className={`shadow, h-100`}>
                <Card.Img variant="top" src={book.img} className=' mb-3' height={450}  />
                <Card.Body className='mb-4 h-75'>
                    <Card.Title className='p-2 text-center text-break' >{book.title}</Card.Title>
                    <Card.Text className='px-3'> Categoria : <br />
                        <span className='text-uppercase'>{book.category}</span>
                    </Card.Text>
                    <Card.Text>
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Id : {book.asin}</ListGroup.Item>
                    <ListGroup.Item> <p className='fs-4 m-0 fw-bold'>€ {book.price}</p> </ListGroup.Item>
                </ListGroup>
                <Card.Body className='' >
                    <Card className='mb-3'><Button variant="warning">Acquista</Button>{' '}</Card>
                    <Card><Button variant="secondary">Visualizza prodotto</Button>{' '}</Card>
                </Card.Body>
            </Card>
        </Col>
    )
}