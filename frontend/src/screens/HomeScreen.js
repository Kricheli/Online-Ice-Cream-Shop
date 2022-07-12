import React from 'react'
// ProductsData
import products from '../Products'
import Product from '../components/Product.js'
// Bootstrap
import { Row, Col } from 'react-bootstrap'
import ProductScreen from './ProductScreen'
const HomeScreen = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => {
          return (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
              
            </Col>
          )
        })}
      </Row>
    </>
  )
}

export default HomeScreen
