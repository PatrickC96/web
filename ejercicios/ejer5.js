/*
Muestre todos los numeros divisores de un numero introduce en prompt.
*/

'use strict'
var numero = Number( prompt("Digite el primer número: ",0))
var texto  = ""
if(numero>0){
    for(var i = numero;i>0;i--){
        if(numero%i==0)
            texto = texto+", "+i
    }
    alert(texto)
}else{
    alert("debe ingresar un numero positivo")
}




