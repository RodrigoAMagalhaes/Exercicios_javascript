//Configuração do módulo de banco de dados
const Sequelize = require('sequelize') //npm install --save sequelize, npm install --save mysql2
const sequelize = new Sequelize('postapp', 'root', 'galodoido',{
    host:"localhost",
    dialect:"mysql"
})
// pelo que eu entendi aqui eu estou exportando as costantes que eu definie ali em cima.
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}