import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import SpecificItem from '../components/SpecificItem';
import { Link } from 'react-router-dom';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listMenuItems } from '../actions/menuItemActions';

const MenuScreen = () => {
  const dispatch = useDispatch();

  const menuItemList = useSelector((state) => state.menuItemList);
  const { loading, error, menuItems } = menuItemList;

  useEffect(() => {
    dispatch(listMenuItems());
  }, [dispatch]);

  let pizzas = menuItems.filter(
    (menuItem) => menuItem.menuCategory === 'pizzas'
  );
  let apps = menuItems.filter((menuItem) => menuItem.menuCategory === 'apps');
  let subs = menuItems.filter((menuItem) => menuItem.menuCategory === 'subs');
  let salads = menuItems.filter(
    (menuItem) => menuItem.menuCategory === 'salads'
  );
  let pastas = menuItems.filter(
    (menuItem) => menuItem.menuCategory === 'pastas'
  );
  let drinks = menuItems.filter(
    (menuItem) => menuItem.menuCategory === 'drinks'
  );
  let desserts = menuItems.filter(
    (menuItem) => menuItem.menuCategory === 'desserts'
  );

  const urlMatch = window.location.href;

  return (
    <>
      <h2 className='text-center'>MENU</h2>
      <Link className='btn my-3' to='/'>
        Go Back
      </Link>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {urlMatch === 'http://localhost:3000/menu/613c56ba902b44af907db166'
            ? pizzas.map((foodCategory) => (
                <Col key={foodCategory._id} sm={12} md={4}>
                  <SpecificItem foodCategory={foodCategory} />
                </Col>
              ))
            : urlMatch === 'http://localhost:3000/menu/613c56ba902b44af907db167'
            ? pastas.map((foodCategory) => (
                <Col key={foodCategory._id} sm={12} md={4}>
                  <SpecificItem foodCategory={foodCategory} />
                </Col>
              ))
            : urlMatch === 'http://localhost:3000/menu/613c56ba902b44af907db168'
            ? apps.map((foodCategory) => (
                <Col key={foodCategory._id} sm={12} md={4}>
                  <SpecificItem foodCategory={foodCategory} />
                </Col>
              ))
            : urlMatch === 'http://localhost:3000/menu/613c56ba902b44af907db169'
            ? salads.map((foodCategory) => (
                <Col key={foodCategory._id} sm={12} md={4}>
                  <SpecificItem foodCategory={foodCategory} />
                </Col>
              ))
            : urlMatch === 'http://localhost:3000/menu/613c56ba902b44af907db16a'
            ? subs.map((foodCategory) => (
                <Col key={foodCategory._id} sm={12} md={4}>
                  <SpecificItem foodCategory={foodCategory} />
                </Col>
              ))
            : urlMatch === 'http://localhost:3000/menu/614cfcba725eab501a5722d1'
            ? desserts.map((foodCategory) => (
                <Col key={foodCategory._id} sm={12} md={4}>
                  <SpecificItem foodCategory={foodCategory} />
                </Col>
              ))
            : urlMatch ===
                'http://localhost:3000/menu/613c56ba902b44af907db16b' &&
              drinks.map((foodCategory) => (
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
