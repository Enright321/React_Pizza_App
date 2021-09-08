import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import SpecificItem from '../components/SpecificItem';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MenuScreen = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const { data } = await axios.get(`/api/menuItems`);
      setMenuItems(data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  let pizzas = menuItems.slice(12, 16);
  let apps = menuItems.slice(16, 38);
  let subs = menuItems.slice(38, 54);
  let salads = menuItems.slice(54, 60);
  let pastas = menuItems.slice(60, 65);
  let drinks_desserts = menuItems.slice(65, 87);

  const urlMatch = window.location.href;

  return (
    <>
      <h2 className='text-center'>MENU</h2>
      <Link className='btn my-3' to='/'>
        Go Back
      </Link>
      {loading ? (
        <h2>Is Loading...</h2>
      ) : (
        <Row>
          {urlMatch === 'http://localhost:3000/menu/1'
            ? pizzas.map((foodCategory) => (
                <Col key={foodCategory._id} sm={12} md={4}>
                  <SpecificItem foodCategory={foodCategory} />
                </Col>
              ))
            : urlMatch === 'http://localhost:3000/menu/2'
            ? pastas.map((foodCategory) => (
                <Col key={foodCategory._id} sm={12} md={4}>
                  <SpecificItem foodCategory={foodCategory} />
                </Col>
              ))
            : urlMatch === 'http://localhost:3000/menu/3'
            ? apps.map((foodCategory) => (
                <Col key={foodCategory._id} sm={12} md={4}>
                  <SpecificItem foodCategory={foodCategory} />
                </Col>
              ))
            : urlMatch === 'http://localhost:3000/menu/4'
            ? salads.map((foodCategory) => (
                <Col key={foodCategory._id} sm={12} md={4}>
                  <SpecificItem foodCategory={foodCategory} />
                </Col>
              ))
            : urlMatch === 'http://localhost:3000/menu/5'
            ? subs.map((foodCategory) => (
                <Col key={foodCategory._id} sm={12} md={4}>
                  <SpecificItem foodCategory={foodCategory} />
                </Col>
              ))
            : urlMatch === 'http://localhost:3000/menu/6' &&
              drinks_desserts.map((foodCategory) => (
                <Col key={foodCategory._id} sm={12} md={4}>
                  <SpecificItem foodCategory={foodCategory} />
                </Col>
              ))}
        </Row>
      )}
    </>
  );
};

export default MenuScreen;
