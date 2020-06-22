'use strict'

/*
Utilizando un bucle, mostrar la suma y la media de los numeros introducidos hasta introducir un numero negativo y ahí mostrar el resultado.
*/

var sumatorio = 0
var entrada = Number( prompt("Digite un numero positivo para continuar\n o digite un numero negativo para salir: ",0))
var contador = 0
while(entrada>=0){
    sumatorio = sumatorio + entrada
    contador = contador + 1
    entrada = Number( prompt("Digite un numero positivo para continuar\n o digite 0 para salir : ",0))
}
alert("El sumatorio es igual: "+sumatorio+", la media es: "+(sumatorio/contador))