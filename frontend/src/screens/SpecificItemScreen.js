import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Image, ListGroup, Form, Button } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listMenuItemDetails } from '../actions/menuItemActions';

const SpecificItemScreen = ({ history, match }) => {
  const [qty, setQty] = useState(1);
  const [topping, setTopping] = useState([]);

  const dispatch = useDispatch();

  const menuItemDetails = useSelector((state) => state.menuItemDetails);
  const { loading, error, menuItem } = menuItemDetails;

  useEffect(() => {
    dispatch(listMenuItemDetails(match.params.id));
  }, [dispatch, match]);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}?topping=${topping}`);
  };

  return (
    <>
      <Link className='btn my-3' to='/'>
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={menuItem.image} alt={menuItem.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>{menuItem.item}:</ListGroup.Item>
              <ListGroup.Item>Price: ${menuItem.price}</ListGroup.Item>
              <ListGroup.Item>{menuItem.text}</ListGroup.Item>
              <ListGroup.Item>
                INGREDIENTS: {menuItem.ingredients}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${menuItem.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {menuItem.maxOrder > 0 ? 'In Stock' : 'Out Of Stock'}
                  </Col>
                </Row>
              </ListGroup.Item>
              {menuItem.maxOrder > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Qty</Col>
                    <Col>
                      <Form.Control
                        as='select'
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                      >
                        {[...Array(menuItem.maxOrder).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}
              {menuItem.toppings && (
                <ListGroup.Item>
                  <Row>
                    <Col>Toppings</Col>
                    <Col>
                      <Form.Control
                        as='select'
                        value={topping}
                        onChange={(e) => setTopping(e.target.value)}
                      >
                        {menuItem.toppings.map((topping) => (
                          <option key={topping}>topping</option>
                        ))}
                        <option></option>
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}
              <ListGroup.Item>
                <Button
                  type='button'
                  className='btn-block btn'
                  onClick={addToCartHandler}
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
    </>
  );
};

export default SpecificItemScreen;
