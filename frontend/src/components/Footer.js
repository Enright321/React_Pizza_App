import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className='py-3'>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            Copyright 2021 &copy; Elicia's Pizza, All Right's Reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
