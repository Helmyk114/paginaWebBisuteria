const express = require('express')
const cors = require('cors')

const productos = require('./components/productos/producto.routes')

const app = express()
app.use(cors())

app.use('/', productos)



app.listen(4000)
