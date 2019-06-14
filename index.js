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

app.get('/api/todosLosArticulos',(req,res)=>{
    res.send({
  "peliculas": [
    {
      "id": 1,
      "nombre": "El sexto sentido",
      "director": "M. Night Shyamalan",
      "clasificacion": "Drama"
    },
    {
      "id": 2,
      "nombre": "Pulp Fiction",
      "director": "Tarantino",
      "clasificacion": "Acción"
    },
    {
      "id": 3,
      "nombre": "Todo Sobre Mi Madre",
      "director": "Almodobar",
      "clasificacion": "Drama"
    },
    {
      "id": 4,
      "nombre": "300",
      "director": "Zack Snyder",
      "clasificacion": "Acción"
    },
    {
      "id": 5,
      "nombre": "El silencio de los corderos",
      "director": "Jonathan Demme",
      "clasificacion": "Drama"
    },
    {
      "id": 6,
      "nombre": "Forrest Gump",
      "director": "Robert Zemeckis",
      "clasificacion": "Comedia"
    },
    {
      "id": 7,
      "nombre": "Las Hurdes",
      "director": "Luis Buñuel",
      "clasificacion": "Documental"
    }
  ],
  "clasificaciones": [
    {
      "nombre": "Drama",
      "id": 1
    },
    {
      "nombre": "Comedia",
      "id": 2
    },
    {
      "nombre": "Documental",
      "id": 3
    },
    {
      "nombre": "Acción",
      "id": 4
    }
  ]
})
})

server=http.createServer(app);
server.listen(port,()=>{console.log("the server is running by the port: "+port)})
