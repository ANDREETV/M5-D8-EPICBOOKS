import React from 'react'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import allbooks from '../categoryFilms/allbooks.json'
import CommentArea from './CommentArea';
import horror from '../categoryFilms/horror.json'
import scifi from '../categoryFilms/scifi.json'
import romance from '../categoryFilms/romance.json'
import history from '../categoryFilms/history.json'
import fantasy from '../categoryFilms/fantasy.json'

export default function BookDetails() {

    let { asin } = useParams()
    let { libro } = useParams()

    let book;

    if (libro === "horror") {
        book = horror.find((elem) => elem.asin === asin);
    } else if (libro === "scifi") {
        book = scifi.find((elem) => elem.asin === asin);
    } else if (libro === "history") {
        book = history.find((elem) => elem.asin === asin);
    } else if (libro === "romance") {
        book = romance.find((elem) => elem.asin === asin);
    } else if (libro === "fantasy") {
        book = fantasy.find((elem) => elem.asin === asin);
    } else {
        book = allbooks.find((elem) => elem.asin === asin);
    }



    console.log(book.img);
    return (
        <>
            <Container>
                <Row className='mt-5'>
                    <Col>
                        <img style={{ width: '400px' }} src={book.img} alt={book.title} />
                    </Col>

                    <Col className='mt-3'>
                        <h2>{book.title}</h2>
                        <div>
                            <p>Categoria : <span>{book.category}</span></p>
                            <p>Asin: <span>{book.asin}</span></p>
                        </div>
                        <div>
                            <p>Prezzo: </p>
                            <p className='fs-1 fw-bold'>{book.price} €</p>
                        </div>
                        <div className='d-flex gap-2 align-items-center'>
                            <i className="bi bi-circle-fill text-success" style={{ fontSize: '0.7em' }}></i>
                            <span className='text-success fw-bold'>Disp. immediata
                            </span>
                            <i class="bi bi-info-circle" style={{ cursor: 'pointer' }}></i>
                        </div>
                        <div className='mt-5'>
                            <CommentArea elementId={book.asin} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

