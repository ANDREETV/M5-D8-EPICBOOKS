
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import ModalRecensioni from './ModalRecensioni'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
const booksAPI = 'https://striveschool-api.herokuapp.com/api/comments/'
const autoAPI = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM2ZjI1ODMzYjE1MjAwMTQ3NjE3OWIiLCJpYXQiOjE2ODcyNjU0NjMsImV4cCI6MTY4ODQ3NTA2M30.CGk44f84KTI-ByU4Ma5Bb14qgj74Dv887zIzabyL_XQ"

export default function CommentArea({ elementId }) {
    const [comments, setComments] = useState([]);
    const [review, setReview] = useState("");
    const [rating, setRating] = useState("");
    const [selectedComment, setSelectedComment] = useState(null);
    const [erroriRec, setError] = useState(null);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const deleteSubmit = (elementId) => {
        axios({
            method: 'delete',
            url: `${booksAPI}${elementId}`,
            headers: {
                Authorization: `Bearer ${autoAPI}`,
                "Content-Type": "application/json",
            },
        })
            .then(() => {
                setComments(comments.filter((elem) => elem._id !== elementId));
            })
            .catch((error) => console.log(error));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if ((rating < 1 || rating > 5 || rating === '') && (review === '')) {
            return setError('Devi scrivere la recensione e dare un voto');
        } else if (rating < 1 || rating > 5) {
            return setError("La valutazione deve essere compresa tra 1 e 5");
        } else if (review === '') {
            return setError("Devi scrivere la recensione");
        }
        const newComment = {
            elementId: elementId,
            comment: review,
            rate: rating,
        };
        axios({
            method: 'put',
            url: `${booksAPI}${selectedComment._id}`,
            data: newComment,
            headers: {
                Authorization: `Bearer ${autoAPI}`,
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                const updatedComments = comments.map((comment) => {
                    if (comment._id === selectedComment._id) {
                        return res.data;
                    }
                    return comment;
                });
                console.log(updatedComments);
                setComments(updatedComments);
                setSelectedComment(null);
                setReview("");
                setRating("");
            })
            .catch((error) => console.log(error));
            handleClose()
    }

    const putSubmit = (commentId) => {
        handleShow()
        const commentToEdit = comments.find((comment) => comment._id === commentId);
        if (commentToEdit) {
            setSelectedComment(commentToEdit);
            setReview(commentToEdit.comment);
            setRating(commentToEdit.rate);
            setError(null);
        }
    };

    useEffect(() => {
        axios
            .get(`${booksAPI}${elementId}`, {
                headers: {
                    'Authorization': `Bearer ${autoAPI}`
                }
            })
            .then((res) => setComments(res.data));
    }, [elementId]);
    const style = { fill: `none`, stroke: `#fff`, strokeLinecap: `round`, strokeLinejoin: `round`, strokeWidth: `32px` }
    const styleDue = { stroke: `#fff`, strokeLinecap: `round`, strokeMiterlimit: `10`, strokeWidth: `32px` }
    return (
        <>
            <Row className="pb-3">
                <hr />
                <h4 className="text-dark-emphasis mb-2 fw-bold">Recensioni :</h4>
                <div className='d-flex justify-content-center mt-3'>
                    <ModalRecensioni
                        comments={comments}
                        setComments={setComments}
                        elementId={elementId}
                        setSelectedComment={setSelectedComment}
                        setError={setError}
                        setRating={setRating}
                        setReview={setReview}
                    />
                </div>
                <hr className='my-4' />
                {comments.map((comment, index) => (
                    <Row key={index} className="d-flex flex-column gap-2 mb-3">
                        <p className="m-0 fw-bold">
                            Autore: <span className="text-secondary">{comment.author}</span>
                        </p>
                        <Col>
                            <p className="m-0 text-secondary">
                                <span className="fw-bold text-dark">Commento:</span>  {comment.comment}
                            </p>
                        </Col>
                        <Col>
                            <p className="m-0 text-secondary">
                                <span className="fw-bold text-dark">Rate:</span> {comment.rate}
                            </p>
                        </Col>
                        <Col className="d-flex gap-3 justify-content-center">
                            <button type="button" className="button" onClick={() => 
                                putSubmit(comment._id)
                            } >
                                <span className="button__text">Modifica</span>
                                <span className="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" className="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
                            </button>

                            <button className="buttonRed" type="button" onClick={() => deleteSubmit(comment._id)}>
                                <span className="button__text">Elimina</span>
                                <span className="button__icon">
                                    <svg className="svg" height="20" viewBox="0 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg">
                                        <title></title>
                                        <path d={"M112,112l20,320c.95,18.49,14.4,32,32,32H348c17.67,0,30.87-13.51,32-32l20-320"}
                                            style={style}>
                                        </path>
                                        <line style={styleDue} x1={80} x2={432} y1={112} y2={112}>
                                        </line>
                                        <path d={"M192,112V72h0a23.93,23.93,0,0,1,24-24h80a23.93,23.93,0,0,1,24,24h0v40"}
                                            style={style}>
                                        </path>
                                        <line
                                            style={style} x1={256} x2={256} y1={176} y2={400}>
                                        </line>
                                        <line
                                            style={style} x1={184} x2={192} y1={176} y2={400}>
                                        </line>
                                        <line
                                            style={style} x1={328} x2={320} y1={176} y2={400}>
                                        </line>
                                    </svg>
                                </span>
                            </button>
                        </Col>
                    </Row>
                ))}
            </Row>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Inserisci recensione</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit} >
                        <Form.Group className="mb-3 d-flex flex-column">
                            <Form.Label>Scrivi recensione</Form.Label>
                            <input
                                className='my-2'
                                type="text"
                                name="review"
                                value={review}
                                onChange={(e) => setReview(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 d-flex flex-column">
                            <Form.Label>Valutazione (da 1 a 5)</Form.Label>
                            <input
                                className='my-2'
                                type="text"
                                name="rating"
                                value={rating}
                                onChange={(e) => setRating(e.target.value)}
                            />
                        </Form.Group>
                        {erroriRec && <p style={{ color: "red" }}>{erroriRec}</p>}
                        <Button variant="primary" type="submit" onClick={handleSubmit}>
                            Invia recensione
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}



