var express = require('express');

var app = express();

app.use(express.json());

app.get('/',function(req,res){
    res.send("Site de nada");
});


app.listen(8000,function(){
    console.log("Servidor ativo no porto 8000");
});