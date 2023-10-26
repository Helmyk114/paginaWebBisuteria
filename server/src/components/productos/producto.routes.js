const express = require('express')
const router = express.Router()
const {getAllProduct} = require('./producto.controller')

router.get('/', getAllProduct)

module.exports = router