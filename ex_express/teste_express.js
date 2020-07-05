//Confi express
const express = require("express") // importa o módulo. npm install --save express
const app = express()
const handlebars = require('express-handlebars') //npm install --save express-handlebars

//Configuração do módulo de banco de dados
const Sequelize = require('sequelize') //npm install --save sequelize, npm install --save mysql2
const sequelize = new Sequelize('teste', 'root', 'galodoido',{
    host:"localhost",
    dialect:"mysql"
})

//Config
    //Template engine
    app.engine('handlebars', handlebars({defaultLayout:'main'})) //esse trem aqui faz com que eu não precise ficar sempre digitando html5 nas
    app.set('view engine', 'handlebars')

//Criando rotas
    app.get('/cad', function(req, res){

        res.render('formulario') //Renderiza uma página html no navegador.
    })

    app.post('/add', function(res, res){
        res.send('FORMULÁRIO RECEBIDO')
    })

//função pra inicia o servidor com uma função de call back.
    app.listen(8081, function(){

        console.log('Servidor is running...');
    
    });