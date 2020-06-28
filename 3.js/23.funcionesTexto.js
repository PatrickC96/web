'use strict'

var numero = 44

var texto = "##hola este es mi curso de js33##"
var texto2 = "##bienvenido##"
//combertir a cadena un numero
var datos=numero.toString()

var dato2 = texto.toUpperCase()
var dato3 = texto.toLowerCase()

console.log(datos,dato2,dato3,dato2.length)

var textoTotal=texto.concat("mas "+texto)
console.log(textoTotal)

var busqueda = textoTotal.indexOf("curso")
console.log(busqueda)

var busqueda = textoTotal.lastIndexOf("s")
console.log(busqueda)

var busqueda = textoTotal.match(/[0-9]+/g)
console.log(busqueda)