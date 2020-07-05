const db = require('./db') //aqui eu não entendi foi porra nenhuma, eu simplesmente peguei o que eu fiz no db.js e joguei em uma função.

const Post = db.sequelize.define('postagens',{
   titulo:{
       type: db.Sequelize.STRING
   }, 
   conteudo:{
       type: db.Sequelize.TEXT
   } 
})

// Post.sync({force:true}) - sempre que gerar uma model só execute uma única vez.

module.exports = Post