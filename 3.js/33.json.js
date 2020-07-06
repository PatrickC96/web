'use stict'

// json notacion de objetos en javascipt

var pelicula={
    titulo:"Transformers",
    year:2017,
    pais:"USA"
}
console.log(pelicula)

pelicula.titulo="Super man"



var peliculas=[
    {titulo:"Titanic",year:1998,pais:"USA"},
    {titulo:"Batman",year:1958,pais:"USA"},
    {titulo:"arana",year:2000,pais:"USA"},
    pelicula
]

console.log(peliculas)

var caja_palecula=document.querySelector('#peliculas')
var insdex

for(index in peliculas){
    var parrafo = document.createElement("p")
    parrafo.append(peliculas[index].titulo+" - "+peliculas[index].year)
    caja_palecula.append(parrafo)
}






