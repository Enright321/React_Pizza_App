import React from 'react';
import { Row, Col, Image, ListGroup } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const ContactScreen = () => {
  return (
    <div className='py-3'>
      <Helmet>
        <title>Pizza Store | Contact</title>
      </Helmet>
      <Row>
        <Col md={6}>
          <Image src='/images/loc1.png' alt='location 1' fluid />
        </Col>
        <Col md={5} className='py-3'>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <Row>ADDRESS:</Row>
              <Row>1111 Main St.</Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>PHONE:</Row>
              <Row>333-333-3333</Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>EMAIL:</Row>
              <Row>mainstreet@gmail.com</Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>HOURS:</Row>
              <Row>Monday - Friday: 12pm to 10pm</Row>
              <Row>Saturday: 12pm to 12am</Row>
              <Row>Sunday: 12pm to 10pm</Row>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col className='py-3' md={6}>
          <Image src='/images/loc2.jpg' alt='location 2' fluid />
        </Col>
        <Col md={5}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <Row>ADDRESS:</Row>
              <Row>2222 West St.</Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>PHONE:</Row>
              <Row>444-444-4444</Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>EMAIL:</Row>
              <Row>weststreet@gmail.com</Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>HOURS:</Row>
              <Row>Monday - Friday: 12pm to 10pm</Row>
              <Row>Saturday: 12pm to 12am</Row>
              <Row>Sunday: 12pm to 10pm</Row>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col className='py-3' md={6}>
          <Image src='/images/loc3.jpg' alt='location 1' fluid />
        </Col>
        <Col md={5}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <Row>ADDRESS:</Row>
              <Row>5555 North St.</Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>PHONE:</Row>
              <Row>777-777-7777</Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>EMAIL:</Row>
              <Row>northstreet@gmail.com</Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>HOURS:</Row>
              <Row>Monday - Friday: 12pm to 10pm</Row>
              <Row>Saturday: 12pm to 12am</Row>
              <Row>Sunday: 12pm to 10pm</Row>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col className='py-3' md={6}>
          <Image src='/images/loc4.jpg' alt='location 1' fluid />
        </Col>
        <Col md={5}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <Row>ADDRESS:</Row>
              <Row>0000 South St.</Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>PHONE:</Row>
              <Row>000-000-0000</Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>EMAIL:</Row>
              <Row>southstreet@gmail.com</Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>HOURS:</Row>
              <Row>Monday - Friday: 12pm to 10pm</Row>
              <Row>Saturday: 12pm to 12am</Row>
              <Row>Sunday: 12pm to 10pm</Row>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

export default ContactScreen;
