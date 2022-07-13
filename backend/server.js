import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import products from './data/products.js'
import colors from 'colors'

//adding the dotnev package
dotenv.config()
connectDB()

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
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold)
)
