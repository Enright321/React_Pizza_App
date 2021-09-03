import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
  return (
    <Card className='m-3 p-3 rounded card'>
      <Link to={`/category/${category._id}`}>
        <Card.Img src={category.image} variant='top' />
      </Link>
      <Card.Body>
        <Card.Text as='div'>
          <div className='my-1 text-center'>
            <strong>{category.description}</strong>{' '}
          </div>
        </Card.Text>
        <div className='row'>
          <Link className='btn-2' to={`/category/${category._id}`}>
            VIEW {category.item}
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Category;
