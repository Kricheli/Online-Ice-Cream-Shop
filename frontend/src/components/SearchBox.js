import React, { useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import '../index.css'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }
  return (
    <Form onSubmit={submitHandler} className='row'>
      <Form.Control
        style={{ width: 350 }}
        type='text'
        name='q'
        id='searchbox'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='ex: Strawberry Topped Tart'
        className='ml-sm-5 col bg-transparent   '
      ></Form.Control>
      <Button
        type='submit'
        variant='outline'
        className='col '
        style={{ padding: 0, width: 0 }}
      >
  <i class="fa-solid fa-magnifying-glass"></i>
      </Button>
    </Form>
  )
}

export default SearchBox
