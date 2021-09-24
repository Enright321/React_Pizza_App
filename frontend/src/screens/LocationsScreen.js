import React from 'react';
import { Row, Col } from 'react-bootstrap';

const LocationsScreen = () => {
  return (
    <div className='py-3'>
      <h2 className='text-center py-4'>ELICIA'S LOCATIONS</h2>
      <Row>
        <Col>
          <img src='./images/loc3.jpg' alt='location' variant='top' />
        </Col>
        <Col>
          <Row>
            <h3>6656 Gravois Ave.</h3>
          </Row>
          <Row>
            <h6>Serving South City and Affton</h6>
          </Row>
          <Row>
            <h5>314-351-6111</h5>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <h3>8570 Watson Rd.</h3>
          </Row>
          <Row>
            <h6>Serving Webster and Crestwood</h6>
          </Row>
          <Row>
            <h5>314-842-2222</h5>
          </Row>
        </Col>
        <Col>
          <img src='./images/loc.jpg' alt='location' variant='top' />
        </Col>
      </Row>
      <Row>
        <Col>
          <img src='./images/loc5.jpg' alt='location' variant='top' />
        </Col>
        <Col>
          <Row>
            <h3>2801 Hampton Ave.</h3>
          </Row>
          <Row>
            <h6>Serving Dogtown and The Hill</h6>
          </Row>
          <Row>
            <h5>314-645-6000</h5>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <h3>3209 Gravois Ave.</h3>
          </Row>
          <Row>
            <h6>Serving Downtown St. Louis and Soulard</h6>
          </Row>
          <Row>
            <h5>314-771-7777</h5>
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
