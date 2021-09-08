import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup } from 'react-bootstrap';
import axios from 'axios';

const SpecificItemScreen = ({ match }) => {
  const [menuItem, setMenuItem] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`/api/menuItems/${match.params.id}`);
      setMenuItem(data);
    };
    fetchData();
  }, [match]);

  return (
    <>
      <Link className='btn my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={menuItem.image} alt={menuItem.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>{menuItem.item}:</ListGroup.Item>
            <ListGroup.Item>Price: ${menuItem.price}</ListGroup.Item>
            <ListGroup.Item>{menuItem.text}</ListGroup.Item>
            <ListGroup.Item>INGREDIENTS: {menuItem.ingredients}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <Row>
                <Col>Price:</Col>
                <Col>
                  <strong>${menuItem.price}</strong>
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
