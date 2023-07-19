import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
// import CommentArea from './CommentArea';

export default function SingleBook({
  item,
  selected,
  setSelected,
  resetSelection,
}) {
  const cardClass =
    selected === item ? 'selected border border-3 border-danger' : 'unselected';

  const handleSelect = () => {
    resetSelection();
    setSelected(item);
  };

  // console.log("sel", handleSelect);
  return (
    <>
      <Col key={item.asin} md={12} lg={6} xl={4} sm={12}>
        <Card className={`shadow, h-100 ${cardClass}`}>
          <Card.Img
            variant="top"
            src={item.img}
            className="mb-3"
            height={450}
            onClick={handleSelect}
          />
          <Card.Body className="mb-4 h-75">
            <Card.Title className="p-2 text-center text-break">
              {item.title}
            </Card.Title>
            <Card.Text className="px-3">
              {' '}
              Categoria : <br />
              <span className="text-uppercase">{item.category}</span>
            </Card.Text>
            <Card.Text></Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Id : {item.asin}</ListGroup.Item>
            <ListGroup.Item>
              {' '}
              <p className="fs-4 m-0 fw-bold">€ {item.price}</p>{' '}
            </ListGroup.Item>
          </ListGroup>
          <Card.Body className="">
            <Card className="mb-3 d-grid gap-2">
              <Button variant="warning">Acquista</Button>{' '}
            </Card>
            <Card className="d-grid gap-2">
              <Link
                className="d-grid gap-2 text-decoration-none"
                to={`/${item.category}/${item.asin}`}
              >
                <Button variant="secondary">Visualizza prodotto</Button>{' '}
              </Link>
            </Card>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
