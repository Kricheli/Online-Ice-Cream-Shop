import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { saveShippingAdress } from '../actions/cartAction'

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { shippingAdress } = cart

  const [adress, setAdress] = useState(shippingAdress.adress)
  const [city, setCity] = useState(shippingAdress.city)
  const [postalCode, setPostalCode] = useState(shippingAdress.postalCode)
  const [country, setCountry] = useState(shippingAdress.country)

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveShippingAdress({ adress, city, postalCode, country }))
    history.push('/payment')
  }

  return (
    <>
      <FormContainer>
        <CheckoutSteps step1 step2 />
        <h1>
          <i className='fas fa-arrow-right'></i>Shipping
        </h1>
        <Form className='ms-4' onSubmit={submitHandler}>
          <Form.Group controlId='adress'>
            <Form.Label>Address</Form.Label>
            <Form.Control
              type='adress'
              placeholder='Enter Adress'
              value={adress}
              required
              onChange={(e) => setAdress(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId='city'>
            <Form.Label>City</Form.Label>
            <Form.Control
              type='city'
              placeholder='Enter City'
              value={city}
              required
              onChange={(e) => setCity(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='postalCode'>
            <Form.Label>Postal Code</Form.Label>
            <Form.Control
              type='number'
              placeholder='Enter Postal Code'
              value={postalCode}
              required
              onChange={(e) => setPostalCode(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='country'>
            <Form.Label>Country</Form.Label>
            <Form.Control
              type='country'
              placeholder='Enter Country'
              value={country}
              required
              onChange={(e) => setCountry(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button
            type='button'
            className='mt-3'
            variant='primary'
            onClick={submitHandler}
          >
            Proceed to payment
          </Button>
        </Form>
      </FormContainer>
    </>
  )
}

export default ShippingScreen
