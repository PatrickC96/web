'use strict'

/*
Mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario.
*/

var numero1 = Number( prompt("Digite el primer número: ",0))
var numero2 = Number( prompt("Digite el segundo número: ",10))

var texto  = ""

if(numero1<numero2){
    for(var i = numero1+1;i<numero2;i++){
        if(i%2!=0)
            texto = texto+", "+i
    }
    alert(texto)

}else{
    alert("Debe ingresar números consecutivos")
}