import React from 'react';
import { Row, Col } from 'react-bootstrap';
import menuItems from '../data/menuItems';
import SpecificItem from '../components/SpecificItem';
import { Link } from 'react-router-dom';

const MenuScreen = ({ match, pizzaSpecial }) => {
  const specificItem = menuItems.find((p) => p._id === match.params.id);
  console.log(specificItem);

  let pizzas = menuItems.slice(12, 16);
  let apps = menuItems.slice(16, 38);
  let subs = menuItems.slice(38, 54);
  let salads = menuItems.slice(54, 60);
  let pastas = menuItems.slice(60, 65);
  let drinks_desserts = menuItems.slice(65, 87);

  return (
    <>
      <h2 className='text-center'>MENU</h2>
      <Link className='btn my-3' to='/'>
        Go Back
      </Link>
      <Row>
        {specificItem._id === '1'
          ? pizzas.map((foodCategory) => (
              <Col key={foodCategory._id} sm={12} md={4}>
                <SpecificItem foodCategory={foodCategory} />
              </Col>
            ))
          : specificItem._id === '2'
          ? pastas.map((foodCategory) => (
              <Col key={foodCategory._id} sm={12} md={4}>
                <SpecificItem foodCategory={foodCategory} />
              </Col>
            ))
          : specificItem._id === '3'
          ? apps.map((foodCategory) => (
              <Col key={foodCategory._id} sm={12} md={4}>
                <SpecificItem foodCategory={foodCategory} />
              </Col>
            ))
          : specificItem._id === '4'
          ? salads.map((foodCategory) => (
              <Col key={foodCategory._id} sm={12} md={4}>
                <SpecificItem foodCategory={foodCategory} />
              </Col>
            ))
          : specificItem._id === '5'
          ? subs.map((foodCategory) => (
              <Col key={foodCategory._id} sm={12} md={4}>
                <SpecificItem foodCategory={foodCategory} />
              </Col>
            ))
          : specificItem._id === '6' &&
            drinks_desserts.map((foodCategory) => (
              <Col key={foodCategory._id} sm={12} md={4}>
                <SpecificItem foodCategory={foodCategory} />
              </Col>
            ))}
      </Row>
    </>
  );
};

export default MenuScreen;
