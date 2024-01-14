const Sequelize = require("sequelize");


const conection = new Sequelize("dataset","root" ,"InacioSilva8819&", {
    host: 'localhost',
    dialect: 'mysql',
})

conection.authenticate()
.then(function(){
    console.log("Connection sucess")
}).catch(function(){
    console.log("Error com conexão")
})
module.exports = conection;