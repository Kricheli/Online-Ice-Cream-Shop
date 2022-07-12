import React from 'react'
import { Link } from 'react-router-dom'
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
} from 'react-bootstrap'
import Rating from '../components/Rating'
import Products from '../Products'

import products from '../Products'

const ProductScreen = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id)
  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroupItem variant='flush'>
            <h3>{product.name}</h3>
          </ListGroupItem>
          <ListGroupItem>
            <Rating
              value={product.rating}
              text={`${product.numReviews} Reviews`}
            />
          </ListGroupItem>
          <ListGroupItem>
            Price: <span className='fw-bold h3'>${product.price}</span>
          </ListGroupItem>
          <ListGroupItem>
           {product.description}
          </ListGroupItem>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroupItem variant='flush'>
              <ListGroupItem>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <span className='fw-bold'>${product.price}</span>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? `In stock` : 'Out of stcok'}
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Button className='btn-black' type='button' disabled={product.countInStock===0}>
                    Add to Cart
                  </Button>
                </Row>
              </ListGroupItem>
            </ListGroupItem>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen
