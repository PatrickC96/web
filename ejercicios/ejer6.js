/*
Que nos diga si un numero es par o impar.
    Ventana prompt
    Si no es valido que nos pida de nuevo el numero
*/
'use strict'
do{
    var numero = Number( prompt("Digite el número: ",0))
    var texto  = ""
    if(numero>=0){
            if(numero%0==0){
                alert("El nuemero es par")
            }else{
                alert("El numero es impar")
            }
    }else{
        alert("debe ingresar un numero positivo")
    }
}while(!(numero>0))