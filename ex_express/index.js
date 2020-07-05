//Confi express
const express = require("express") // importa o módulo. npm install --save express
const app = express()
const handlebars = require('express-handlebars') //npm install --save express-handlebars
const bodyParser = require('body-parser')
const Post = require('./models/Post')



//Config
    //Template engine
    app.engine('handlebars', handlebars({defaultLayout:'main'})) //esse trem aqui faz com que eu não precise ficar sempre digitando html5 nas
    app.set('view engine', 'handlebars')
    app.use(bodyParser.urlencoded({ extended:false }))
    app.use(bodyParser.json())

//Criando rotas
    app.get('/cad', function(req, res){

        res.render('formulario') //Renderiza uma página html no navegador.
    })

    app.get('/', function(req,res){

        //Eu simplesmente não entendi direito isso. Só sei que a partir disso aqui eu consigo renderizar todos os meus posts chamando a pag htm home.handlebars.

        Post.findAll({order: [['id', 'DESC']]}).then(function(posts){

            res.render('home', {posts:posts})

        })
        
    })

    app.post('/add', function(req, res){
        
        /*esse Post é uma instância criada de usuário. Então eu exportei um ./db.js com as importações do sequelize para o Post.js e depois  
        eu criei uma instância nesse Post.js e exportei. Utilizando o const Post = require('./models/Post') eu importei a instante Post. */ 
        
        Post.create({

            titulo: req.body.titulo,
            conteudo: req.body.conteudo

        }).then(function(){
            res.redirect('/')
        }).catch(function(erro){
            res.send('Aconteceu um erro: '+erro)
        })
        
        //req.body.conteudo // é req porque o referencial é a função, pensa, quando eu mando algo pro cliente é uma response, logo quando o cliente envia algo é uma requisição.
        //res.send("Texto: "+req.body.titulo+ " Conteudo: "+req.body.conteudo) //o método req.body recebe a propriedade name, nesse caso é conteudo.
    })

//função pra inicia o servidor com uma função de call back.
    app.listen(8081, function(){

        console.log('Servidor is running...');
    
    });