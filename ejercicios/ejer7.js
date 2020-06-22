/*
Tabla de multiplicar de un numero introducido por pantalla.
*/

'use strict'
var texto = ""
do{
    var numero = Number( prompt("Digite el número entre 0 y 10: ",0))
    var texto  = ""
    if(numero>=0){
        for(var i = 1;i<=10;i++){
            texto += numero+" x "+i+" = "+(numero*i)+"\n"
        }
        alert(texto)
    }else{
        alert("debe ingresar un numero positivo")
    }
}while(!(numero>=0))