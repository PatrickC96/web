'use strict'

var nomre = prompt("Ingrese su nombre")
var apellido = prompt("Ingrese su apellido")
var texto = "mi nombre es: "+nombre+"<br> Mi apeldo es: "+apellido
document.write(texto)

var texto1 = '<h1>Hola que tal </h1><h2>mi nombre es: ${nombre}<h2><h2>mi apelido es: ${apellido}</h2>';
document.write(texto1)