import React from 'react';
import { Row, Col } from 'react-bootstrap';
import categories from '../categories';
import Category from '../components/Category';

const HomeScreen = () => {
  return (
    <>
      <h1 className='text-center'>SELECT A CATEGORY TO GET STARTED!</h1>
      <Row>
        {categories.map((category) => (
          <Col key={category._id} sm={12} md={4}>
            <Category category={category} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
