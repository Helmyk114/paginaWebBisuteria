const db = require('../../dataBase/db')
const ids = require('../../config/ids')

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
const createProduct = (req,res) =>{
    const { nameProduct, description, price, laborPrice, image, idCategory} = req.body
    const table = 'products'

    ids(table, (idProduct, err) =>{
        if(err){
            console.log({data: `error id: ${err}`})
        }
        const product ={
            idProduct: idProduct,
            nameProduct: nameProduct,
            description: description,
            price: price,
            laborPrice: laborPrice,
            image: image,
            idCategory: idCategory
        }

        const sql = 'INSERT INTO products(idProduct, nameProduct, description, price, laborPrice, image, idCategory) VAlUES (?,?,?,?,?,?,?)'
        db.query(sql, [product.idProduct,product.nameProduct,product.description,product.price,product.laborPrice,product.image,product.idCategory], (err, result) =>{
            if(err){
                console.log({data: `Internal Server Error: ${err}`})
            } else {
                res.json({data: result})
            }
        })
    })
}

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