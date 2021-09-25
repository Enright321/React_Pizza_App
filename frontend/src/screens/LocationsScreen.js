import React from 'react';
import { Row, Col } from 'react-bootstrap';

const LocationsScreen = () => {
  return (
    <div className='py-3'>
      <h2 className='text-center py-4'>STORE LOCATIONS</h2>
      <Row>
        <Col>
          <img src='./images/loc1.PNG' alt='location' variant='top' />
        </Col>
        <Col>
          <Row>
            <h3>1111 Main St.</h3>
          </Row>
          <Row>
            <h6>Serving Area 1 and Area 2</h6>
          </Row>
          <Row>
            <h5>333-333-3333</h5>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <h3>2222 West St.</h3>
          </Row>
          <Row>
            <h6>Serving Locations 3 and 4</h6>
          </Row>
          <Row>
            <h5>444-444-4444</h5>
          </Row>
        </Col>
        <Col>
          <img src='./images/loc2.jpg' alt='location' variant='top' />
        </Col>
      </Row>
      <Row>
        <Col>
          <img src='./images/loc3.jpg' alt='location' variant='top' />
        </Col>
        <Col>
          <Row>
            <h3>5555 West St.</h3>
          </Row>
          <Row>
            <h6>Serving Area 5 and 6</h6>
          </Row>
          <Row>
            <h5>777-777-7777</h5>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <h3>0000 South St.</h3>
          </Row>
          <Row>
            <h6>Serving Area 7 and 8</h6>
          </Row>
          <Row>
            <h5>000-000-0000</h5>
          </Row>
        </Col>
        <Col>
          <img src='./images/loc4.jpg' alt='location' variant='top' />
        </Col>
      </Row>
    </div>
  );
};

export default LocationsScreen;
