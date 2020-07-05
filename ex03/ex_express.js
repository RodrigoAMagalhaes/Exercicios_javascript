const express = require("express"); // importa o módulo
const app = express();

// essa função é referente a página principal do projeto. E ta enviando uma pagina html.
app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/ex03.html")
})
// função de rota
app.get("/utech", function(req, res){
    res.send('Essa será a maior empresa de tecnologia do Brasil!!')

})
// função de rota que pega alguns parametros passados
app.get("/dados/:adm/:empresa/:valor", function(req, res){
    res.send(req.params.adm + " é dono da " + req.params.empresa + ", maior empresa do mundo e tem um valor de mercado de aproximadamente " + req.params.valor)
})

//função pra inicia o servidor com uma função de call back.
app.listen(8081, function(){

    console.log('Servidor is running...');
    
});