import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import Products from '../Products'
import products from '../Products'

const ProductScreen = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id)
  console.log(product)
  return <div></div>
}

export default ProductScreen
