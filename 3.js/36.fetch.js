'use strict'
/*
fetch (ajax) permite realizar peticiones a servicios / apis rest --> servicio remoto
recibe un url que devuelva/bote json
vamos a utilizar este sitio: https://jsonplaceholder.typicode.com/users'
otros sitios: https://reqres.in/
promesa captura de los datos utilizando el metodo then
funcional!!
*/
/*
var div_usuarios=document.querySelector("#usuarios");
var usuarios=[];
fetch('https://jsonplaceholder.typicode.com/users')
.then(data=>data.json())//callback que recibe un parametro data y lo convierte en json
.then(data=>{
    usuarios=data;
    console.log(usuarios);
    usuarios.map((data,i)=>{
        let nombre=document.createElement('h3');
        nombre.innerHTML=i+". "+data.name+" - "+data.username+" - "+data.address.city;
        div_usuarios.appendChild(nombre);
        //para ocultar cuando los datos ayan sido cargados. interesante
        document.querySelector(".loading").style.display='none'
    })
})*/
/*
'use stric'

//fetch ajax paremite ralizar peticiones a servicios apis rest servicio remoto
//recibe un url que debuelva/bote json.
//pormesa hace una captura de los datos utilizando los metodos then
var div_usuario = document.querySelector("#usuarios")

var usuarios=[]

fetch('https://jsonplaceholder.typicode.com/users')
.then(data=>data.json())//calbak que recibe un parametros data y lo combierte en json.
.then(data=>{
    usuarios=data
    console.log(usuarios)
    usuarios.map((data,i=>{
        let nombre=document.createElement('h2')
        nombre.innerHTML=i+". "+data.name+" - "+data.username
        div_usuario.append(nombre)
    }))
})

*/


var div_usuarios=document.querySelector("#usuarios");
var div_profesor=document.querySelector("#profesor");
var div_usuariosErvin=document.querySelector("#usuarioE");


getUsuarios()
.then(data=>data.json())
.then(users=>{
    listadoUsuario(users)    
    return getInfo()
})
.then(data=>{
    div_profesor.innerHTML=data
    console.log(data)
    return getUsuarioErvin()
})
.then(data=>data.json())
.then(user=>{
    mostrarUsuario(user)
})
.catch(error=>{
    console.log(error+'  ccccc')
    alert("Error en las peticiones")
})

function getUsuarios(){
    return fetch('https://jsonplaceholder.typicode.com/users')
}
  
function getUsuarioErvin(){
    return fetch('https://reqres.in/api/users?page=2')
}

function getInfo(){
    var profesor={
        nombre:"david",
        apellido:"vargas",
        url:"fis.epn.edu.ec"
    }
    return new Promise((resolve,reject)=>{
        var profesorString=""
        setTimeout(function(){
            profesorString=JSON.stringify(profesor)
            if(typeof profesorString != 'string'||profesorString==''){
                return resolve('Error 1')
            }
            return resolve(profesorString)
        })
    })
    
}
function listadoUsuario(usuarios){
    usuarios.map((data,i)=>{
        let nombre=document.createElement('h3');
        nombre.innerHTML=i+". "+data.name+" - "+data.username+" - "+data.address.city;
        div_usuarios.appendChild(nombre);
        //para ocultar cuando los datos ayan sido cargados. interesante
        document.querySelector(".loading").style.display='none'
    })
}

function mostrarUsuario(usuario){
    let nombre=document.createElement('h4');
    console.log(typeof usuario.data[0].first_name)
    //let avatar=document.createElement('img');
    nombre.innerHTML=usuario.data[0].first_name+" - "+usuario.data[0].last_name;
 
    //avatar.src=usuario.data[0].avatar;
    ///avatar.width="100";
 
    div_usuarioErvin.appendChild(nombre);
    //div_usuarioErvin.appendChild(avatar);
 
    document.querySelector(".loadingE").style.display='none';
 
}