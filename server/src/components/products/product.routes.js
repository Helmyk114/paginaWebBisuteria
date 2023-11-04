const express = require('express')
const router = express.Router()
const { getAllProduct, createProduct } = require('./product.controller')

router
        .get('/products', getAllProduct)
        .post('/products', createProduct)

module.exports = router