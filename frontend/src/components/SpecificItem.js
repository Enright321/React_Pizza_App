import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SpecificItem = ({ foodCategory }) => {
  return (
    <div>
      <Card className='m-3 p-3 rounded card'>
        <Link to={`/item/${foodCategory._id}`}>
          <Card.Img src={foodCategory.image} variant='top' />
        </Link>
        <Card.Body>
          <Card.Text as='div' className='my-1 text-center'>
            <strong>{foodCategory.description}</strong>{' '}
          </Card.Text>
          <div className='row'>
            <Link className='btn-2' to={`/item/${foodCategory._id}`}>
              {foodCategory.item}
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SpecificItem;
