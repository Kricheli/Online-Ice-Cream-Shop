import express from 'express'
const router = express.Router()
import { getProducts, getProductById } from '../controllers/productController.js'

// @description Fetch all products
// @route GET/api/products
// @access Public
router.route('/').get(getProducts)
router.route('/:id').get(getProductById)


export default router
