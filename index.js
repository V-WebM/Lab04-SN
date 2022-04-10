const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');

const app = express();

const port = 5000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"));

app.get('/',(req, res)=>{
    res.render("index",{titulo : "Pagina principal"});
});

app.get('/productos',(req,res) =>{
    res.render("productos",{tituloProductos : "Productos"});
})

app.get('/clientes',(req,res) =>{
    res.render("clientes",{tituloClientes : "Clientes"});
})

app.get('/clientes',(req,res) =>{
    res.render("clientes",{tituloError : "Error"});
})

//rita cualquiera devuelve error 404
//app.use((req, res, next)=> {
 //   res.status(404).sendFile(__dirname + "/public/404.html");
//});


app.listen(port, () =>{
    console.log('puerto ',port);
});