import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup } from 'react-bootstrap';

import menuItems from '../data/menuItems';

const SpecificItemScreen = ({ match }) => {
  const specificItem = menuItems.find((p) => p._id === match.params.id);

  return (
    <>
      <Link className='btn my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={specificItem.image} alt={specificItem.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>{specificItem.item}:</ListGroup.Item>
            <ListGroup.Item>Price: ${specificItem.price}</ListGroup.Item>
            <ListGroup.Item>{specificItem.text}</ListGroup.Item>
            <ListGroup.Item>
              INGREDIENTS: {specificItem.ingredients}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <Row>
                <Col>Price:</Col>
                <Col>
                  <strong>${specificItem.price}</strong>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <a href='/#' className='btn-block btn'>
                Add to Cart
              </a>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default SpecificItemScreen;
