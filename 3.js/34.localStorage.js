'use stict'

//comprobar la disponivilidad de local storage

if(typeof(Storage)!='undefined'){

    console.log("local storage disponible")
}else{
    console.log("Inconpatible con local storage")
}
//guardar datos
//key y valor


localStorage.setItem("Titulo","Aplicacionese Web !!")

console.log(localStorage.getItem("Titulo"))
//para guardar json es necesario combertir a string
document.querySelector("#peliculas").innerHTML=localStorage.getItem("Titulo")

var usuario={
    nombre:"Patrick",
    mail:"patrick@mail.com",
    web:"patrick.com.ec"
}
localStorage.setItem("usuario",JSON.stringify(usuario))


//combertir de string a json 

var user = JSON.parse(localStorage.getItem("usuario"))
console.log(user)
document.querySelector("#user").innerHTML=user["nombre"]+" - "+user["mail"]+" - "+user["web"]


//borrar datos del local storage

//localStorage.removeItem("usuario")

//vaciar todo el localstorage

localStorage.clear()