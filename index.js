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
	  "imagen":"https://firebasestorage.googleapis.com/v0/b/appcarritocompras.appspot.com/o/paparellena.jpg?alt=media&token=652a7225-6bf3-4e6b-9dca-27314466e2c2",
      "categoria": "Papas"
    },
	{
      "id": 2,
      "nombre": "Papa Aborrajada",
      "Inventario": "100",
	  "Precio":"700",
	  "imagen":"https://firebasestorage.googleapis.com/v0/b/appcarritocompras.appspot.com/o/aborrajada.jpg?alt=media&token=e2448b30-bf5b-49eb-aed0-c0d174255041",
      "categoria": "Papas"
    },
	{
      "id": 3,
      "nombre": "Papa Frita Amarilla",
      "Inventario": "100",
	  "Precio":"1000",
	  "imagen":"https://firebasestorage.googleapis.com/v0/b/appcarritocompras.appspot.com/o/amarillafrita.jpg?alt=media&token=8c279796-cf90-4163-97ec-ab7c76f13061",
      "categoria": "Papas"
    },
	{
      "id": 4,
      "nombre": "Papa Frita Francesa",
      "Inventario": "100",
	  "Precio":"1000",
	  "imagen":"https://firebasestorage.googleapis.com/v0/b/appcarritocompras.appspot.com/o/papafrancesa.jpg?alt=media&token=d69960e1-cb75-44fe-80d1-41c761044cff",
      "categoria": "Papas"
    },
	{
      "id": 5,
      "nombre": "Papa Chorriada",
      "Inventario": "100",
	  "Precio":"1500",
	  "imagen":"https://firebasestorage.googleapis.com/v0/b/appcarritocompras.appspot.com/o/papachorriada.jpg?alt=media&token=55b54827-35dd-4d65-86f7-651c4049fa18",
      "categoria": "Papas"
    },
	{
      "id": 6,
      "nombre": "Empanada Res",
      "Inventario": "100",
	  "Precio":"1200",
	  "imagen":"https://firebasestorage.googleapis.com/v0/b/appcarritocompras.appspot.com/o/empanadares.jpg?alt=media&token=4add9b8f-c663-45e7-8a9e-443ed2eef66e",
      "categoria": "Empanadas"
    },
	{
      "id": 7,
      "nombre": "Empanada Pollo",
      "Inventario": "100",
	  "Precio":"1200",
	  "imagen":"https://firebasestorage.googleapis.com/v0/b/appcarritocompras.appspot.com/o/empanadapollo.jpg?alt=media&token=a09e47fe-97ad-4138-8b96-5855285960a2",
      "categoria": "Empanadas"
    },
	{
      "id": 8,
      "nombre": "Empanada Camarón",
      "Inventario": "100",
	  "Precio":"1200",
	  "imagen":"https://firebasestorage.googleapis.com/v0/b/appcarritocompras.appspot.com/o/empanadacamaron.jpg?alt=media&token=19172606-df39-487b-aea6-e90dff59d328",
      "categoria": "Empanadas"
    },
	{
      "id": 9,
      "nombre": "Empanada Arroz",
      "Inventario": "100",
	  "Precio":"1200",
	  "imagen":"https://firebasestorage.googleapis.com/v0/b/appcarritocompras.appspot.com/o/empanadaarrozs.jpg?alt=media&token=ebf3d5a2-bd0e-4212-b515-19b34ae266c1",
      "categoria": "Empanadas"
    },
	{
      "id": 10,
      "nombre": "Marranitas",
      "Inventario": "100",
	  "Precio":"2000",
	  "imagen":"https://firebasestorage.googleapis.com/v0/b/appcarritocompras.appspot.com/o/marranitas.jpg?alt=media&token=cb395661-986e-47d2-8565-f42063af4360",
      "categoria": "Otros"
    },
	{
      "id": 11,
      "nombre": "Aborrajados",
      "Inventario": "100",
	  "Precio":"1700",
	  "imagen":"https://firebasestorage.googleapis.com/v0/b/appcarritocompras.appspot.com/o/maduroaborrajado.jpg?alt=media&token=d423a493-0386-4eee-8a2b-3ab4f92410b6",
      "categoria": "Otros"
    },
	{
      "id": 12,
      "nombre": "Chorizo Res",
      "Inventario": "100",
	  "Precio":"2000",
	  "imagen":"https://firebasestorage.googleapis.com/v0/b/appcarritocompras.appspot.com/o/chorizores.jpg?alt=media&token=b1303ea7-f7ff-4d01-acf9-82f98ee2db67",
      "categoria": "Chorizos"
    },
	{
      "id": 13,
      "nombre": "Chorizo Pollo",
      "Inventario": "100",
	  "Precio":"2000",
	  "imagen":"https://firebasestorage.googleapis.com/v0/b/appcarritocompras.appspot.com/o/chorizopollo.jpg?alt=media&token=e37b379f-e657-4449-a902-87954ff6d25b",
      "categoria": "Chorizos"
    },
	{
      "id": 14,
      "nombre": "Chorizo Mixto",
      "Inventario": "100",
	  "Precio":"2000",
	  "imagen":"https://firebasestorage.googleapis.com/v0/b/appcarritocompras.appspot.com/o/chorizomixto.jpg?alt=media&token=426fde41-5065-4d79-8d09-c7631fb0e6ab",
      "categoria": "Chorizos"
    },
	{
      "id": 15,
      "nombre": "Pastel de Yuca",
      "Inventario": "100",
	  "Precio":"2000",
	  "imagen":"https://firebasestorage.googleapis.com/v0/b/appcarritocompras.appspot.com/o/pastelYuca.jpg?alt=media&token=eda91c32-8e9d-4127-b3cb-8af21af68245",
      "categoria": "Otros"
    }
  ])
})

server=http.createServer(app);
server.listen(port,()=>{console.log("the server is running by the port: "+port)})
