import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Image, ListGroup, Form, Button } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listMenuItemDetails } from '../actions/menuItemActions';
import { addToCart } from '../actions/cartActions';

const SpecificItemScreen = ({ history, match, props }) => {
  const [qty, setQty] = useState(1);
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [size, setSize] = useState([]);

  const handleSelect = (selectedItems) => {
    const toppings = [];
    for (let i = 0; i < selectedItems.length; i++) {
      toppings.push(selectedItems[i].value);
    }
    setSelectedToppings(toppings);
  };

  const dispatch = useDispatch();

  const menuItemDetails = useSelector((state) => state.menuItemDetails);
  const { loading, error, menuItem } = menuItemDetails;

  useEffect(() => {
    dispatch(listMenuItemDetails(match.params.id));
  }, [dispatch, match]);

  // const addToCartHandler = () => {
  //   history.push(
  //     `/cart/${match.params.id}?qty=${qty}?topping=${selectedToppings}?size=${size}`
  //   );
  // };

  const addToCartHandler = (e) => {
    e.preventDefault();
    dispatch(addToCart(menuItem._id, qty, size, selectedToppings));
    history.push('/cart');
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
          <Col md={5}>
            <Image src={menuItem.image} alt={menuItem.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>{menuItem.item}:</ListGroup.Item>
              <ListGroup.Item>${menuItem.price}</ListGroup.Item>
              <ListGroup.Item>{menuItem.text}</ListGroup.Item>
              {menuItem.ingredients && (
                <ListGroup.Item>
                  INGREDIENTS: {menuItem.ingredients}
                </ListGroup.Item>
              )}
            </ListGroup>
          </Col>
          <Col md={4}>
            <ListGroup variant='flush'>
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
                    <Col>
                      Toppings (
                      <small>
                        Hold ctrl and left click to select multiple toppings.
                      </small>
                      )
                    </Col>

                    <Col>
                      <Form.Control
                        as='select'
                        multiple={true}
                        value={selectedToppings}
                        onChange={(e) => {
                          handleSelect(e.target.selectedOptions);
                        }}
                      >
                        {menuItem.toppings.map((topping) => (
                          <option value={topping} key={topping}>
                            {topping}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}
              {menuItem.sizes && (
                <ListGroup.Item>
                  <Row>
                    <Col>Select Size</Col>
                    <Col>
                      <Form.Control
                        as='select'
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                      >
                        {menuItem.sizes.map((size) => (
                          <option multiple={true} key={size}>
                            {size}
                          </option>
                          // <select key={topping} name='toppings'>
                          //   <option multiple={true} value={topping}>
                          //     {topping}
                          //   </option>
                          // </select>
                        ))}
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
