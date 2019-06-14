var express= require('express')
var bodyParser= require('body-parser')
var http= require('http')

var port = process.env.PORT ||3000

app=express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static('client'))
app.use(bodyParser.json())

app.get('/api',(req,res)=>{
    res.send("información api")
})

app.get('/api/pepitoPerez',(req,res)=>{
    res.send({test:"informacion de pepito"})
})

app.get('/api/articulo',(req,res)=>{
    res.send("prueba de nelly")
})

server=http.createServer(app);
server.listen(port,()=>{console.log("the server is running by the port: "+port)})
