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

app.get('/api/ListaArticulos',(req,res)=>{
    res.send([
    {
      "id": 1,
      "nombre": "Papa Rellena",
      "Inventario": "100",
	  "Precio":"2000",
	  "imagen":"",
      "categoria": "Papas"
    },
	{
      "id": 2,
      "nombre": "Papa Aborrajada",
      "Inventario": "100",
	  "Precio":"700",
	  "imagen":"",
      "categoria": "Papas"
    },
	{
      "id": 3,
      "nombre": "Papa Frita Amarilla",
      "Inventario": "100",
	  "Precio":"1000",
	  "imagen":"",
      "categoria": "Papas"
    },
	{
      "id": 4,
      "nombre": "Papa Frita Francesa",
      "Inventario": "100",
	  "Precio":"1000",
	  "imagen":"",
      "categoria": "Papas"
    },
	{
      "id": 5,
      "nombre": "Papa Chorriada",
      "Inventario": "100",
	  "Precio":"1500",
	  "imagen":"",
      "categoria": "Papas"
    },
	{
      "id": 6,
      "nombre": "Empanada Res",
      "Inventario": "100",
	  "Precio":"1200",
	  "imagen":"",
      "categoria": "Empanadas"
    },
	{
      "id": 7,
      "nombre": "Empanada Pollo",
      "Inventario": "100",
	  "Precio":"1200",
	  "imagen":"",
      "categoria": "Empanadas"
    },
	{
      "id": 8,
      "nombre": "Empanada Camarón",
      "Inventario": "100",
	  "Precio":"1200",
	  "imagen":"",
      "categoria": "Empanadas"
    },
	{
      "id": 9,
      "nombre": "Empanada Arroz",
      "Inventario": "100",
	  "Precio":"1200",
	  "imagen":"",
      "categoria": "Empanadas"
    },
	{
      "id": 10,
      "nombre": "Marranitas",
      "Inventario": "100",
	  "Precio":"2000",
	  "imagen":"",
      "categoria": "Otros"
    },
	{
      "id": 11,
      "nombre": "Aborrajados",
      "Inventario": "100",
	  "Precio":"1700",
	  "imagen":"",
      "categoria": "Otros"
    },
	{
      "id": 12,
      "nombre": "Chorizo Res",
      "Inventario": "100",
	  "Precio":"2000",
	  "imagen":"",
      "categoria": "Chorizos"
    },
	{
      "id": 13,
      "nombre": "Chorizo Pollo",
      "Inventario": "100",
	  "Precio":"2000",
	  "imagen":"",
      "categoria": "Chorizos"
    },
	{
      "id": 14,
      "nombre": "Chorizo Mixto",
      "Inventario": "100",
	  "Precio":"2000",
	  "imagen":"",
      "categoria": "Chorizos"
    },
	{
      "id": 15,
      "nombre": "Pastel de Yuca",
      "Inventario": "100",
	  "Precio":"2000",
	  "imagen":"",
      "categoria": "Otros"
    }
  ])
})

server=http.createServer(app);
server.listen(port,()=>{console.log("the server is running by the port: "+port)})
