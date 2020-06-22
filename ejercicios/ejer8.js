/*
Calculadora:
    Pida dos numeros por pantalla
    Si metemos uno mal que nos los vuelva a pedir
    En el cuerpo de la pagina, en una alerta y por la consola 
    el resultado de sumar, restar, multipicar y dividir esas dos cifras

*/

'use strict'



var estado = true
var texto = "Resultatos de las funciones basicas: \n"
do{
    var numero1 = Number( prompt("Digite el primer numero: ",1))
    var numero2 = Number( prompt("Digite el segundo numero: ",1))
    if((numero1>=0||numero1<=0)&&(numero2>0||numero2<0)){
        texto += numero1 + "+" + numero2 + "=" + (numero1+numero2)+"\n"
        texto += numero1 + "-" + numero2 + "=" + (numero1-numero2)+"\n"
        texto += numero1 + "x" + numero2 + "=" + (numero1*numero2)+"\n"
        texto += numero1 + "/" + numero2 + "=" + (numero1/numero2)+"\n"
        alert(texto)
        document.write(texto)
        console.log(texto)
        estado=false
    }else{
        alert("Debe ingresar numeros corectos")
    }
}while(estado)