import { Row, Col, Spinner } from 'react-bootstrap';
// import menuItems from '../data/menuItems';
import FoodCategory from '../components/FoodCategory';
import PizzaSpecial from '../components/PizzaSpecial';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HomeScreen = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const { data } = await axios.get('/api/menuItems');
      setMenuItems(data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  let food = menuItems.slice(0, 6);
  let pizzaSpecials = menuItems.slice(6, 12);

  return (
    <>
      <h2 className='text-center'>SELECT A CATEGORY TO GET STARTED!</h2>

      {loading ? (
        <Spinner animation='border' role='status'>
          <span className='visually-hidden'></span>
        </Spinner>
      ) : (
        <Row>
          {food.map((foodCategory) => (
            <Col key={foodCategory._id} sm={12} md={4}>
              <FoodCategory foodCategory={foodCategory} />
            </Col>
          ))}
        </Row>
      )}

      <h2 className='text-center py-3'>TAKE A LOOK AT OUR SPECIALTY PIZZAS!</h2>
      {loading ? (
        <h2>Is Loading</h2>
      ) : (
        <Row>
          {pizzaSpecials.map((pizzaSpecial) => (
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
