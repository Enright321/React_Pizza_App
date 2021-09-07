import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FoodCategory = ({ foodCategory }) => {
  return (
    <>
      <Card className='m-3 p-3 rounded card'>
        <div className='row'>
          <div className='col'>
            <Link to={`/menu/${foodCategory._id}`}>
              <Card.Img src={foodCategory.image} variant='top' />
            </Link>

            <Card.Body className='my-4'>
              <Card.Text as='div' className='text-center'>
                <strong>{foodCategory.description}</strong>{' '}
              </Card.Text>
              <div className='row my-4'>
                <div className='col text-center'>
                  <Link className='btn-2' to={`/menu/${foodCategory._id}`}>
                    {foodCategory.item}
                  </Link>
                </div>
              </div>
            </Card.Body>
          </div>
        </div>
      </Card>
    </>
  );
};

export default FoodCategory;
