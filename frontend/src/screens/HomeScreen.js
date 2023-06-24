import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../components/Product.js'
import { Row, Col } from 'react-bootstrap'
import Message from '../components/Message'
import { listProducts } from '../actions/productAction'
import Loader from '../components/Loader.js'
import Paginate from '../components/Paginate.js'
import Video from '../media/bg-g.mp4'
import VideoHeader from '../media/video-header.mp4'
import '../index.css'

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword
  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <div className='saleContainer'>
            <p className='sale'>free shipping on orders over $50</p>
          </div>
          <div className='videoContainer'>
            <video id='video' src={Video} autoPlay loop muted playsInline>
              Sorry, your browser doesn't support embedded videos,
            </video>
          </div>
          <div className='videoHeaderContainer'>
            <video
              id='videoHeader'
              src={VideoHeader}
              autoPlay
              loop
              muted
              playsinline
            >
              Sorry, your browser doesn't support embedded videos,
            </video>
          </div>
          <h1 className='header mt-2'>Our Products</h1>
          {products ? (
            <Row>
              {products?.map((product) => {
                return (
                  <Col
                    key={product._id}
                    sm={12}
                    md={6}
                    lg={4}
                    xl={3}
                    className='align-middle'
                  >
                    <Product product={product} />
                  </Col>
                )
              })}
            </Row>
          ) : null}
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  )
}

export default HomeScreen
