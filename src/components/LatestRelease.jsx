import React, { useState } from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SingleBook from '../components/SingleBook ';
import Col from 'react-bootstrap/Col';
import LibroSelezionato from './LibroSelezionato';

export default function LatestRelease({
    filmsSelected,
    filterHorror,
    filterScifi,
    filterRomance,
    filterHistory,
    filterFantasy }) {
    // console.log("ciao", filmsSelected);

    const [selected, setSelected] = useState('');

    const resetSelection = () => {
        setSelected('')
    }

    if (filmsSelected === '0') {
        return (
            <Col sm={8} className='d-flex flex-wrap card mt-5 m-3 text-center'>
                <div className="card-body">
                    <h5 className="card-title">Nessun categoria selezionata</h5>
                </div>
            </Col>
        );
    } else if (filmsSelected === '1') {
        return (
            <div>
                <Container fluid className='mt-5 pt-5'>
                    <Row className="d-flex ">
                        <Col sm={8} className='d-flex flex-wrap'>
                            {
                                filterHorror.map((item) => (
                                    <SingleBook
                                        item={item}
                                        key={item.asin}
                                        selected={selected}
                                        setSelected={setSelected}
                                        resetSelection={resetSelection} />
                                ))
                            }
                        </Col>

                        <Col sm={4} className='recensioni'>
                            <LibroSelezionato selected={selected} />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    } else if (filmsSelected === '2') {
        return (
            <div>
                <Container fluid className='mt-5 pt-5'>
                    <Row className="d-flex ">
                        <Col sm={8} className='d-flex flex-wrap'>
                            {
                                filterScifi.map((item) => (
                                    <SingleBook
                                        item={item}
                                        key={item.asin}
                                        selected={selected}
                                        setSelected={setSelected}
                                        resetSelection={resetSelection} />
                                ))
                            }
                        </Col>

                        <Col sm={4}>
                            <LibroSelezionato selected={selected} />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    } else if (filmsSelected === '3') {
        return (
            <div>
                <Container fluid className='mt-5 pt-5'>
                    <Row className="d-flex ">
                        <Col sm={8} className='d-flex flex-wrap'>
                            {
                                filterRomance.map((item) => (
                                    <SingleBook
                                        item={item}
                                        key={item.asin}
                                        selected={selected}
                                        setSelected={setSelected}
                                        resetSelection={resetSelection} />
                                ))
                            }
                        </Col>

                        <Col sm={4}>
                            <LibroSelezionato selected={selected} />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    } else if (filmsSelected === '4') {
        return (
            <div>
                <Container fluid className='mt-5 pt-5'>
                    <Row className="d-flex ">
                        <Col sm={8} className='d-flex flex-wrap'>
                            {
                                filterHistory.map((item) => (
                                    <SingleBook
                                        item={item}
                                        key={item.asin}
                                        selected={selected}
                                        setSelected={setSelected}
                                        resetSelection={resetSelection} />
                                ))
                            }
                        </Col>

                        <Col sm={4}>
                            <LibroSelezionato selected={selected} />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    } else if (filmsSelected === '5') {
        return (
            <div>
                <Container fluid className='mt-5 pt-5'>
                    <Row className="d-flex ">
                        <Col sm={8} className='d-flex flex-wrap'>
                            {
                                filterFantasy.map((item) => (
                                    <SingleBook
                                        item={item}
                                        key={item.asin}
                                        selected={selected}
                                        setSelected={setSelected}
                                        resetSelection={resetSelection} />
                                ))
                            }
                        </Col>

                        <Col sm={4}>
                            <LibroSelezionato selected={selected} />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
