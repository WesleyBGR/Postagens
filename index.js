const express = require("express");
const app = express();
const handlebars = require("express-handlebars");

//Config
    //template engine
    app.engine('handlebars',handlebars({defaultLayout:'main'}));
    app.set('view engine', 'handlebars');
    
    //Conexão com o banco de dados MySql
    const Sequelize = require('sequelize');
    const sequelize = new Sequelize('test','root','123456789',{
        host:"localhost",
        dialect:'mysql'
    });

app.listen(8081,function(){
    console.log("Servidor Rodando");
});