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

  let pizzas = menuItems.slice(6, 7);
  let apps = menuItems.slice(13, 26);
  let subs = menuItems.slice(26, 34);
  let salads = menuItems.slice(34, 40);
  let pastas = menuItems.slice(40, 44);
  let drinks_desserts = menuItems.slice(44, 66);

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
            : urlMatch ===
                'http://localhost:3000/menu/613c56ba902b44af907db16b' &&
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
