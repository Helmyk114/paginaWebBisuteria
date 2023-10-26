/**
 * Obtener lista de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getAllProduct = (req,res) =>{
    const data = ["Hola"]
    res.send({data})
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