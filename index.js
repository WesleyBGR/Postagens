const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require('body-parser');
//Config

    //template engine
    app.engine('handlebars',handlebars({defaultLayout:'main'}));
    app.set('view engine', 'handlebars');

    //body parser
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(bodyParser.json());

    //Conexão com o banco de dados MySql
    const Sequelize = require('sequelize');
    const sequelize = new Sequelize('test','root','123456789',{
        host:"localhost",
        dialect:'mysql'
    });

//Rotas

    app.get('/cad', function(req,res){
        res.render('form');
    });

    app.post('/add', function(req,res){
        var titulo =req.body.titulo;
        var conteudo =req.body.conteudo;
        res.send("Texto: "+titulo+" conteudo: "+req.body.conteudo);
    });

app.listen(8081,function(){
    console.log("Servidor Rodando");
});