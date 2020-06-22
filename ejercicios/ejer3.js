/*
Hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario.
*/

'use strict'

var numero1 = Number( prompt("Digite el primer número: ",0))
var numero2 = Number( prompt("Digite el segundo número: ",10))

var texto  = ""

if(numero1<numero2){
    for(var i = numero1+1;i<numero2;i++){
        texto = texto+", "+i
    }
    alert(texto)

}else{
    alert("Debe ingresar números consecutivos")
}