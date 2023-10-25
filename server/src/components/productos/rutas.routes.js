const express = require('express')
const respuesta = require('../../config/respuestas')

const router = express.Router()

router.get('/', function(req,res){
    respuesta.success(req,res,'Todo Ok',200)
})

module.exports = router