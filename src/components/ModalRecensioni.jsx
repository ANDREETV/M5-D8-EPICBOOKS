// import axios from 'axios';
// import React from 'react'
// import { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';

// const booksAPI = 'https://striveschool-api.herokuapp.com/api/comments/'
// const autoAPI = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNkNDRkMzZhMTllZjAwMTRkNmU0NTEiLCJpYXQiOjE2ODQzNDM5MDksImV4cCI6MTY4NTU1MzUwOX0.T1tPFlolGMY_u6vxmS37K7M7o1z8bt8LUAPxfrae2u4'



// export default function ModalRecensioni({ elementId }) {
//     const [comments, setComments] = useState([])
//     const [review, setReview] = useState("");
//     const [rating, setRating] = useState("");

//     const [show, setShow] = useState(false);
//     const handleClose = (e) => { setShow(false); e.stopPropagation() };
//     const handleShow = (e) => { setShow(true); e.stopPropagation() };

//     function handleReviewChange(e) {
//         setReview(e.target.value);
//     }

//     function handleRatingChange(e) {
//         setRating(e.target.value);
//     }


//     function handleSubmit(e) {
//         e.preventDefault();
//         const newComment = {
//             elementId: elementId,
//             comment: review,
//             rate: rating,
//         }

//         const config = {
//             headers: {
//                 Authorization: `Bearer ${autoAPI}`
//             }
//         }
//             axios.post(booksAPI, newComment, config)
//                 .then((response) => {
//                     setComments([...comments, response.data])
//                 })
//                 .catch((error) => console.log("errore post", error));

//     }

//     return (
//         <>
//             <Button variant="primary" onClick={handleShow}>
//                 Launch demo modal
//             </Button>

//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Inserisci recensione</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <Form onSubmit={handleSubmit} >
//                         <Form.Group className="mb-3">
//                             <Form.Label>Scrivi recensione</Form.Label>
//                             <Form.Control type="text" placeholder="Scrivi recensione" name="review" value={review} onChange={handleReviewChange} onClick={(e) => e.stopPropagation()} />
//                         </Form.Group>
//                         <Form.Group className="mb-3">
//                             <Form.Label>Valutazione (da 1 a 5)</Form.Label>
//                             <Form.Control type="number" placeholder="" name="rating" value={rating} onChange={handleRatingChange} onClick={(e) => e.stopPropagation()} />
//                         </Form.Group>
//                         {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
//                         <Button variant="primary" type="submit" onClick={handleSubmit}>
//                             Invia recensione
//                         </Button>
//                     </Form>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>
//                         Close
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     )
// }
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const booksAPI = 'https://striveschool-api.herokuapp.com/api/comments/'
const autoAPI = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM2ZjI1ODMzYjE1MjAwMTQ3NjE3OWIiLCJpYXQiOjE2ODcyNjU0NjMsImV4cCI6MTY4ODQ3NTA2M30.CGk44f84KTI-ByU4Ma5Bb14qgj74Dv887zIzabyL_XQ"



export default function ModalRecensioni({ comments,setComments,elementId }) {
    const [review, setReview] = useState("");
    const [rating, setRating] = useState("");
    const [erroriRec, setError] = useState(null);
    const [selectedComment, setSelectedComment] = useState(null);
    const [show, setShow] = useState(false);
    const handleClose = () =>  setShow(false);  
    // const handleShow = () => setShow(true);  
    
    function handleShow() {
        setShow(true)
    }
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

        console.log("ddadad",selectedComment);

            // Updating existing comment
            axios({
                method: 'post',
                url: booksAPI,
                data: newComment,
                headers: {
                    Authorization: `Bearer ${autoAPI}`,
                    "Content-Type": "application/json",
                },
            })
                .then((res) => {
                    setComments([...comments, res.data]);
                    setReview("");
                    setRating("");
                })
                .catch((error) => console.log(error));
        
            // Creating new comment

        handleClose()
    };

    return (
        <>
            <Button className='w-75' variant="primary" onClick={handleShow}>
                Aggiungi recensione
            </Button>

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
    )
}
