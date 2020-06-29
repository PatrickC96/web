'use stict'

/*
    Ejercicio arrays
1. Pida 6 numeros por pantalla y los meta en un array
2. Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y en la consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
(Se valorará el uso de funciones)
*/
function print(texto=""){
    document.write(texto+"<br>")
}
function mostrarArray(elemento,text=""){
    print("<h1>Contenido del arreglo </h1>")
    print("<ul>")
    elemento.forEach((element,index) => {
        document.write("<li>"+element+"</li>")
    });
    print("</ul>")
}
function ordenarMostrar(elementos){
    elementos.sort()
    mostrarArray(elementos)
}
function invertirMostrar(elementos){
    elementos.reverse()
    mostrarArray(elementos)
}
var numeros = []
var numero = 0
for(var i = 0;i<6;i++){
    //numero = prompt("ingrese el numero: ["+i+"]",0)
    numeros.push(i)
}
mostrarArray(numeros)
console.log(numeros)
ordenarMostrar(numeros)
invertirMostrar(numeros)
print("<h1>El array tiene: "+numeros.length+" elementos</h1>")

var busqueda = parseInt(prompt("ingrese el numero a buscar: ",0))
var posicion=numeros.findIndex(numero=>numero==busqueda)
print(busqueda)
print(posicion)
print(numeros)
if(posicion && posicion!=-1){
    print("el elemento es: "+ numeros[posicion]+" en la posicion: "+posicion)
}else{
    print('no hay el elemento')
}



