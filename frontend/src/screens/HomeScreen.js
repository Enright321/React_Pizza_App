import { Row, Col, Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import FoodCategory from '../components/FoodCategory';
import PizzaSpecial from '../components/PizzaSpecial';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listMenuItems } from '../actions/menuItemActions';
import Message from '../components/Message';
import Loader from '../components/Loader';
import SlideCarousel from '../components/SlideCarousel';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const menuItemList = useSelector((state) => state.menuItemList);
  const { loading, error, menuItems } = menuItemList;
  useEffect(() => {
    dispatch(listMenuItems());
  }, [dispatch]);

  let food = menuItems;
  let pizzaSpecials = menuItems;

  return (
    <>
      <Helmet>
        <title>Welcome to the Pizza Store</title>
        <meta
          name='description'
          content='we sell the best pizza around.'
        ></meta>
        <meta
          name='keywords'
          content='pizza, pizza store, online pizza order, saint louis pizza, St. Louis Pizza'
        ></meta>
      </Helmet>
      <SlideCarousel></SlideCarousel>
      <Container>
        <div
          style={{
            position: 'absolute',
            margin: 'auto',
          }}
        >
          <img
            className='bg-fillers'
            style={{
              position: 'sticky',
              paddingTop: '5rem',
              maxWidth: '1100px',
              width: '100%',
            }}
            src='images/home-bg1.png'
            alt='bg'
          />
          <img
            className='bg-fillers'
            style={{
              position: 'sticky',
              maxWidth: '1100px',
              maxHeight: '1000px',
              paddingTop: '5rem',
              paddingBottom: '5rem',
              width: '100%',
            }}
            src='images/home-bg2.png'
            alt='bg'
          />
        </div>

        <h2
          className='title'
          style={{ paddingTop: '2rem', position: 'relative' }}
        >
          CHOOSE A CATEGORY TO GET STARTED!
        </h2>

        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Row>
            {food
              .filter((foodCategory) => foodCategory.key === 'category')
              .map((foodCategory) => (
                <Col key={foodCategory._id} sm={12} md={4}>
                  <FoodCategory foodCategory={foodCategory} />
                </Col>
              ))}
          </Row>
        )}

        <h2
          style={{ position: 'relative', marginTop: '5rem' }}
          className='title py-3'
        >
          TAKE A LOOK AT OUR SPECIALTY PIZZAS!
        </h2>
        {loading ? (
          <h3>Loading</h3>
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Row>
            {pizzaSpecials
              .filter((pizzaSpecial) => pizzaSpecial.key === 'special')
              .map((pizzaSpecial) => (
                <Col key={pizzaSpecial._id} sm={12} md={4}>
                  <PizzaSpecial pizzaSpecial={pizzaSpecial} />
                </Col>
              ))}
          </Row>
        )}
      </Container>
    </>
  );
};

export default HomeScreen;
