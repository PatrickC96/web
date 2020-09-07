// con htttp crudo

// const http = require('http')

// const server = http.createServer((req,res)=>{
//     res.status = 200
//     res.setHeader("Content-type","text/plain")
//     res.end('<h1>hola mundo con http</h1>')
// })

// server.listen(3000,()=>{
//     console.log("server on port 300")
// })

const express = require('express')
const morgan = require('morgan')
//servidor
const app = express()
const port = 3000
//settings
//variables.
app.set('appName','Express tutorial')
app.set('port',port)
app.set('view engine','ejs')
//middlewares
//manejador de peticion
// sirve para procesar datos antes de llegar a la ruta
function logger(req,res,next){
    console.log('request received: ',req.protocol,'://',req.get('host'),req.originalUrl)
    next()
}





//formatear para que sepa leer los datos de json
app.use(express.json())
app.use(logger)

app.use(morgan('dev'))
//para cualquier ruta se antepone la opcion 
app.all('/user',(req,res,next)=>{
    console.log("por aqui paso")
    next()
})

// app.get('/',(req,res)=>{
//     res.send('PETICING GET RECEIVED')
// })

app.get('/user',(req,res)=>{
    res.json({
        "userName":'carlos',
        "lasName":"chimba"
    })
})

app.get('/',(req,res)=>{
    const data = [{name:'john'},{name:'joe'},{name:"cameron"},{name:'julio'}]
    res.render('index.ejs',{people:data})
})

app.post('/user/:id',(req,res)=>{
    console.log(req.body)
    console.log(req.params)
    res.send('POST REQUEST RECEIVED')
    
})

app.put('/user/:id',(req,res)=>{
    console.log(req.body)
    res.send(`User ${req.params.id} updated`)
})
app.delete('/user/:userID',(req,res)=>{
    res.send(`User ${req.params.userID} delete`)
})

app.use(express.static('public'))

app.listen(app.get('port'),()=>{
    console.log(app.get('appName'))
    console.log("server on port:",app.get('port'))
})