'use stict';
//DOM es un Document Objet Model:arbol
//de todos los elementos que hay en algo
function print(texto=""){
    //document.write(texto+"<br>")
    console.log(texto)
}
/*
ojo el script debe estar despues del body
estas son las dos formas de acceder a los elementos del html
*/
var caja2 = document.querySelector("#miCaja")
var caja = document.getElementById("miCaja")
caja2.innerHTML = "este es el texto modificado"
caja2.style.background="red"
print(caja2)
//busta todo por el nombre de las etiquetas
var todosLosDivs = document.getElementsByTagName("div")
//print(todosLosDivs)

var contenidoTextDiv2=todosLosDivs[2].textContent
print(contenidoTextDiv2)

var contenidoTextoDiv = todosLosDivs[1].innerHTML = "este el cambio para 1";
todosLosDivs[1].style.background="green"

var contenidoTextoDiv = todosLosDivs[2].innerHTML = "este el cambio para 2";
todosLosDivs[2].style.background="blue"
var contenidoTextoDiv = todosLosDivs[2].innerHTML = "este el cambio para 3";
todosLosDivs[3].style.background="white"

var seccion = document.querySelector("#miseccion")

var hr = document.createElement("hr")

for( valor in todosLosDivs){
    if(typeof todosLosDivs[valor].textContent=='string'){
        var parrafo=document.createElement("p");
        var texto=document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
    }
}

seccion.append(hr)
