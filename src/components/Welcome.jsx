
import React from 'react'

//  bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';


export default function Welcome({films, selectFilms}) {
    // console.log("guarda", films);
    return (
        <Container>
            <Row className='mt-5'>
                <Col>
                    <h1>EpiBooks</h1>
                    <select className='mt-3' onChange={selectFilms} name="films">
                        <option value={0}>Seleziona la categoria...</option>
                        {films.map(ele => (
                            <option key={ele.id} value={ele.id}>{ele.name}</option>
                        ))}
                    </select>
                </Col >
                <Col className='d-flex flex-column justify-content-end align-items-center'>
                    <h2>Vendiamo libri di tutte le categorie</h2>
                </Col>
            </Row>
        </Container>
    )
}

