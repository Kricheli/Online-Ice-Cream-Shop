import express from 'express'
import dotenv from 'dotenv'
import products from './data/products.js'

dotenv.config()

const PORT = process.env.PORT || 5000

const app = express()
app.get('/', (req, res) => {
  res.send('Api is running')
})

app.get('/api/products', (req, res) => {
  res.json(products)
})
app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
)
// app.listen(PORT, console.log(`Srever running in ${process.env.NODE_ENV} on port ${PORT}`))

//First we want to set up the server so we will use express because it's far more fast and works with js which is a very easy language to learn.
// afterwards we set up the home page by the command app.get and add the url to route the http request to the path we specified, then we need to add a callback function using res & req (response and request) to describe we want to do in that page.

// after the set up of the home page we set up the singe product page by adding the ':id' in the end of the url so we add the find method to add the condition that if the product id is equal to the id in the url then that specific product will be displayed

// by the end we add the app listen method which bind to the port we specified and listen to any changes
