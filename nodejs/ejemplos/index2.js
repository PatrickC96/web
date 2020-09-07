// const os = require('os')

// console.log(os.platform())
// console.log(os.release())
// console.log('free men: ',os.freemem())
// console.log('total men: ',os.totalmem())
// console.log('men usada:',os.totalmem()-os.freemem(),"MB")

//modulo para los archivos
// const fs = require('fs')
//escrevir en un archivo
// fs.writeFile('./text.txt','linea uno',function (err){
//   if(err) console.log(err)

//   console.log("archivo creado")
// })

// console.log('ultima linea de codigo')

// leer desde un archivo
// fs.readFile('./text.txt',function(err,data){
//     if(err) console.log(err)

//     console.log(data.toString())
// })

// const http = require('http')

// const colors = require('colors')

// const handleServer = function (req,res){
//     res.writeHead(200,{ 'Content-type' : 'text/html' })
//     res.write('<h1>Hola mundo </h1>')
//     res.end()
// }

// const server = http.createServer(handleServer)
// //conp,mlback
// server.listen(3000,function (){
//     console.log("se escucha en el puerto 3000".red)
// })

const express = require('express')
// const { Server } = require('http')

const server = express()

server.get('/', function (req,res){
    res.send('<h1>hola mundo con express </h1>')
    res.end()
})

server.listen(3000,function (){
    console.log('se creo un server en el puerto 3000')
})