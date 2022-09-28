import React, { useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap'

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
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='ml-sm-5 col '
      ></Form.Control>
      <Button
        type='submit'
        variant='outline'
        className='col '
        style={{ padding: 0, width: 0 }}
      >
        Search
      </Button>
    </Form>
  )
}

export default SearchBox
