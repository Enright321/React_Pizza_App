import { Row, Col } from 'react-bootstrap';
import FoodCategory from '../components/FoodCategory';
import PizzaSpecial from '../components/PizzaSpecial';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listMenuItems } from '../actions/menuItemActions';
import Message from '../components/Message';
import Loader from '../components/Loader';

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
      <h2 className='text-center'>SELECT A CATEGORY TO GET STARTED!</h2>

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

      <h2 className='text-center py-3'>TAKE A LOOK AT OUR SPECIALTY PIZZAS!</h2>
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
    </>
  );
};

export default HomeScreen;
