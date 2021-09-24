import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Message from '../components/Message';
import { addToCart, removeFromCart } from '../actions/cartActions';

const CartScreen = ({ match, location, history }) => {
  const menuItemId = match.params.id;

  // const qty = location.search ? Number(location.search.split('=')[1]) : 1;
  // const size = location.search ? location.search.split('=')[3] : '';
  // const toppings = location.search
  //   ? location.search.split('=').join(',').split('?')[2]
  //   : '';
  // console.log(size);
  // console.log(toppings);

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  // useEffect(() => {
  //   if (menuItemId) {
  //     dispatch(addToCart(menuItemId, qty, size, toppings));
  //   }
  // }, [dispatch, menuItemId, qty, toppings, size]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };
  const checkoutHandler = () => {
    history.push('/login?redirect=shipping');
    // history.push('/shipping');
  };

  return (
    <>
      <Row>
        <Col>
          <h1>Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <Message>
              Your cart is empty <Link to='/'>Go Back</Link>
            </Message>
          ) : (
            <ListGroup variant='flush'>
              {cartItems.map((item) => (
                <ListGroup.Item key={item.menuItem}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col>
                      <Link to={`/item/${item.menuItem}`}>{item.name}</Link>
                    </Col>
                    <Col>{item.sizes}</Col>
                    <Col>{item.toppings}</Col>
                    <Col>${item.price}</Col>
                    <Col>
                      {/* <Form.Control
                        as='select'
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.menuItem, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(item.maxOrder).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control> */}
                      Qty: {item.qty}
                    </Col>
                    <Col>
                      <Button
                        type='button'
                        variant='light'
                        onClick={() => removeFromCartHandler(item.menuItem)}
                      >
                        <i className='fas fa-trash'></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
      </Row>
      <Row className='py-4'>
        <Col md={4}>
          <Card style={{ height: 'auto' }}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>
                  Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}
                  ) items
                </h2>
                PRICE: $
                {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
              </ListGroup.Item>

              <ListGroup.Item>
                <Button
                  type='button'
                  className='btn-block'
                  disabled={cartItems.length === 0}
                  onClick={checkoutHandler}
                >
                  Proceed To Checkout
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default CartScreen;
