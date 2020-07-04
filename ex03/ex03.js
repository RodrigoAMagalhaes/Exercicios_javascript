const express = require("express");
const app = express();


app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/ex03.html")
})

app.get("/utech", function(req, res){
    res.send('Essa será a maior empresa de tecnologia do Brasil!!')

})

app.get("/dados/:adm/:empresa/:valor", function(req, res){
    res.send(req.params.adm + " é dono da " + req.params.empresa + ", maior empresa do mundo e tem um valor de mercado de aproximadamente " + req.params.valor)
})
app.listen(8081, function(){

    console.log('Servidor is running...');
    
});