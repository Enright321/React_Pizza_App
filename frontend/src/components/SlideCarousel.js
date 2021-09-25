import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SlideCarousel = () => {
  return (
    <div>
      <div>
        <Carousel indicators={false} prevIcon={null} nextIcon={null}>
          <Carousel.Item style={{ height: '400px' }}>
            <img
              style={{ height: '400px', filter: 'brightness(40%)' }}
              className='d-block w-100'
              src='images/car1.jpg'
              alt='sample'
            />

            <Carousel.Caption className='my-1 car-cap'>
              <h2 className='title'>WELCOME TO OUR PIZZA SHOP!</h2>
              <h6 className='my-4'>
                St. Louis family owned and operated since 1951.
              </h6>
              <Link
                to='/about'
                className='btn my-4'
                style={{
                  backgroundColor: 'var(--dark-main-color)',
                }}
              >
                WHO WE ARE
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: '400px' }}>
            <img
              style={{ height: '400px', filter: 'brightness(40%)' }}
              className='d-block w-100'
              src='images/car2.jpg'
              alt='sample'
            />
            <Carousel.Caption className='car-cap'>
              <h2 className='title'>NEED SOME HELP?</h2>
              <h6>
                Find your closest location on the locations page for contact
                information!
              </h6>

              <Link
                to='/locations'
                className='btn my-4'
                style={{
                  backgroundColor: 'var(--dark-main-color)',
                }}
              >
                FIND US
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: '400px' }}>
            <img
              style={{ height: '400px', filter: 'brightness(30%)' }}
              className='d-block w-100'
              src='images/car3.jpg'
              alt='sample'
            />
            <Carousel.Caption className='my-3 car-cap'>
              <h2 className='title'>ORDER ONLINE!</h2>
              <h6>
                Set up an account, and order online with our secure, fast, and
                easy payment methods.
              </h6>

              <Link
                to='/login'
                className='btn my-4'
                style={{
                  backgroundColor: 'var(--dark-main-color)',
                }}
              >
                Log In
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default SlideCarousel;
