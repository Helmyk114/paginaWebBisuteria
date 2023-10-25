const express = require('express')

const productos = require('./components/productos/rutas.routes')

const app = express()

app.use('/', productos)

app.listen(4000)