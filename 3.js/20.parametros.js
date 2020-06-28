'use strict'
//parametros rest y spread
//simplifica el manejo de arreglos y listas de parametros.
//spread permite expandir "desempaqueta"
//rest es la coleccion de tosdos los elementos en un mismo "empaqueta"
function listaFrutar(fruta1,fruta2,...resto_de_frutas){
    console.log("Fruta 1: ",fruta1)
    console.log("Fruta 1: ",fruta2)
    console.log(resto_de_frutas)
    console.log(typeof resto_de_frutas)
}

listaFrutar("manzana","naranja","sandia","pera","coco","banano","melon")

var frutas = ["pera","manzana","pina"]
console.log(typeof frutas)
listaFrutar(...frutas,"coco","ceraza")