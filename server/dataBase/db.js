const mysql = require('mysql2');
require('dotenv').config()

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
});

db.connect(function(err){
    if(err){
        console.error(err);
    } else {
        console.log('🎆 Conexion a la base de datos 🎆')
    }
})

module.exports = db;