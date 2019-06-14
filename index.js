var express= require('express')
var bodyParser= require('body-parser')
var http= require('http')

var port = process.env.PORT ||3000

app=express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static('client'))
app.use(bodyParser.json())

app.get('/api',(req,res)=>{
    res.send("info api")
})

//desde aqui Nelly
app.get('api/articulos',(req,res)=>{
    res.send({articulo1:"prueba"})
})

server=http.createServer(app);
server.listen(port,()=>{console.log("the server is running by the port: "+port)})
