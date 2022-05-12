const express = require("express");
const morgan = require("morgan");
const mysql = require("mysql");

//Módulo das queries
const appQueries = require("./sql/sqlQueries");


//const mongoose = require("mongoose");

//Construir App
const app = express();

//Const Conexão MongoDB 
//const conn = "mongodb+srv://DaAlmeida2003:JD1rPc5DAc0rmyRG@jad.thrqb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
//mongoose.connect(conn)
//    .then((result) => console.log("Conectado á base de dados"))
//    .catch((err) => console.log(err));


//Conexão MySQL
/*const conn = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "",

});*/


//console.log(appQueries.sqlCriarBD);

//Se existir um erro na base de dados
//conn.connect(function(err) {
//Se der erro!!
//  if (err) throw err;

//Se correr bem a conexão
//    console.log("Connected!");
/*
//Se existir base de dados
conn.query(appQueries.sqlApagarBD, function(err, result) {
    if (err) throw err;
    console.log("Base de dados apagada");
});

//Criar Base de dados
conn.query(appQueries.sqlCriarBD, function(err, result) {
    if (err) throw err;
    console.log("Base de dados criada");
});
*/
//});

//Criar Templates
app.set('view engine', 'ejs');

//Agarrar Pasta dos Ficheiros
app.set('views');

// Middleware (Logs)
app.use(morgan('dev'));

//Ficheiros EStáticos
app.use(express.static('public'));

//Porta Local
app.listen(3000);

//Index View
app.get("/", (req, res) => {
    res.render('html/index', { tituloloAdd: 'Início' });
});

//Sobre View
app.get("/sobre", (req, res) => {
    res.render('html/sobre', { tituloloAdd: 'Sobre Nós' });
});

//404 página erro
app.use((req, res) => {
    res.status(404).render("html/Error/404", { root: __dirname })
});