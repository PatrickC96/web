'use strict'

var categoria = ["accion","terror","comedia"]
var peliculas = ["trasformers","la vida es bella","gran torino","saw","la mascara"]
peliculas.push("batman")
//peliculas.pop()
var indice=peliculas.indexOf("trasformers") 
console.log(peliculas.join())
//para dividir el texto separada en ,
var cadena="texto1, texto2, texto3"
var cadena_array=cadena.split(",")
console.log(cadena_array)
//combertir a matriz
var cine = [categoria,peliculas]
//ordenar la cadena
//console.log(peliculas.sort())
//ordenar la cadena invertida
//console.log(peliculas.reverse())
/*
for(var i = 0;i<cine.length;i++){
    for(var j = 0;j<cine[i].length;j++){
        document.write("<li>"+i+" - "+cine[i][j]+"</li>")        
    }
    document.write("<br>")
}*/

for(let pelicula in peliculas){
    document.write(peliculas[pelicula])
}

var busqueda=peliculas.findIndex(pelicula=>pelicula=="batman")
console.log(busqueda)

var precios=[1,2,3,4,5,6,7]
var busqueda2=precios.some(precios=>precios>6.5)
console.log(busqueda2)

