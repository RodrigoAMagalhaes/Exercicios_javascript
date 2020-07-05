/*Nesse primeiro bloco de código estamos inicializando o framework sequelize e entrando em um banco de dados */

const Sequelize = require('sequelize') // Essa é a funcção "import" no caso do node.js. Eu sempre tenho que importat a lib em uma variável/constante.
const sequelize = new Sequelize ('teste', 'root', 'galodoido', {
    host:'localhost',
    dialect:'mysql'
}) // Aqui eu defino qual banco eu vou acessar, usuário, senha, local e o tipo de banco.


/*Nesse bloco de código nós criamos uma tabela com as colunas titulo, conteudo e email.
Aqui eu tenho que criar um objeto que será a minha tabela através do método define. */

const Postagens = sequelize.define('postagens', {
    titulo:{
        type: Sequelize.STRING
    },
    conteudo:{
        type: Sequelize.TEXT
    },
    email:{
      type: Sequelize.TEXT  
    }
}) 

Postagens.create({
    titulo:"NOME DO LIVRO",
    conteudo:"HISTORIA DO RODRIGO",
    email:"emailficicio@gamil.com"
})

const Cadastro = sequelize.define('cadastros', {
    nome:{
        type: Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.TEXT
    },
    email:{
        type: Sequelize.TEXT  
    },
    telefone:{
        type: Sequelize.INTEGER  
      }
}) 

Cadastro.create({
    nome:"RODRIGO",
    sobrenome:"MAGALHAES",
    email:"magalhaesrda@gmail.com",
    telefone:"031986950789"
})

Postagens.sync({force: true}) // isso daqui é pra forçar a sincronização.
Cadastro.sync({force:true})

/* Aqui é um bloco de código para autenticação.
O método then será acionado caso a autenticação ocorra com sucesso.
O método catch será acionado caso a autenticação não ocorra com sucesso. */

sequelize.authenticate().then(function(){
    console.log('Conectado com sucesso!')
}).catch(function(erro){
    console.log('Falha ao se conectar:' +erro)
})

