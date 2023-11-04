const db = require('../../dataBase/db')

/**
 * Obtener lista de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getAllProduct = (req,res) =>{
    let sql = 'SELECT * FROM products'
    db.query(sql,(err,rows,field) =>{
        if(!err){
            if(rows < 1){
                res.json({data: `Error no found products`})
            } else {
                res.json({data: rows})
            }
        } else {
            console.log({data: `Internal Server Error: ${err}`})
        }
    })
}

/**
 * Obtener un detalle
 * @param {*} req 
 * @param {*} res 
 */
const getProduct = (req,res) =>{}

/**
 * Insertar un registro
 * @param {*} req 
 * @param {*} res 
 */
const createProduct = (req,res) =>{}

/**
 * Actualizar un registro
 * @param {*} req 
 * @param {*} res 
 */
const updateProduct = (req,res) =>{}

/**
 * Eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteProduct = (req,res) =>{}


module.exports = {
    getAllProduct,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}