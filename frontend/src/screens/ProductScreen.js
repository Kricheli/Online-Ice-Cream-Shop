import React, { useState, useEffect } from 'react'
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
import axios from 'axios'
// import Products from '../Products'

// import products from '../Products'

const ProductScreen = ({ match }) => {
  const [product, setProduct] = useState([])

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`)
      setProduct(data)
    }
    fetchProduct()
  }, [])

  // in order to fetch daat from the backend we need to initaly set the products status as an empty array and by the useEffect fuction we call it as async whice means its need to wait for a response before it's calling it quit and then we declere the {data} varible and call axios get from the url of the id which end by {match.params.id} and we set the product status as the data that we will recvive by navigating to a spesific product, afterwards we call the function

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
          <ListGroupItem>{product.description}</ListGroupItem>
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
                  <Button
                    className='btn-black'
                    type='button'
                    disabled={product.countInStock === 0}
                  >
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
