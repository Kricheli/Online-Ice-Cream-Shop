import React, { Fragment, useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { savePaymentMethod } from '../actions/cartAction'
import CheckoutSteps from '../components/CheckoutSteps'

const PaymentScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { shippingAdress } = cart

  if (!shippingAdress) {
    history.push('/shipping')
  }

  const [paymentMethod, setPaymentMethod] = useState('Paypal')
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    history.push('/placeorder')
  }

  return (
    <>
      <FormContainer>
        <CheckoutSteps step1 step2 step3 />
        <h1>
          <i className='fas fa-arrow-right'></i>Payment
        </h1>
        <Form className='ms-4' onSubmit={submitHandler}>
          <Form.Group>
          <Col>
            <Form.Label><i class="fa-brands fa-paypal"></i></Form.Label>
          <label>
            <Form.Check 
              type='radio'
              label= 'PayPal'
              id='PayPal'
              name='paymentMethod'
              value='Payal'
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
              ></Form.Check></label>

          </Col>
              </Form.Group>
              <Form.Group>
          <Col>
            <Form.Label><i class="fa-solid fa-credit-card"></i></Form.Label>
          <label  >
            <Form.Check  
              type='radio'
              label= 'Credit Card'
              id='creditCard'
              name='paymentMethod'
              value='creditCard'
              onChange={(e) => setPaymentMethod(e.target.value)}
              ></Form.Check></label>

          </Col>
              </Form.Group>
          <Button
            type='button'
            className='mt-3'
            variant='primary'
            onClick={submitHandler}
          >
            Place Order
          </Button>
        </Form>
      </FormContainer>
    </>
  )
}

export default PaymentScreen
