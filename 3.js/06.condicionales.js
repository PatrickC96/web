'use strict'

var edad=75
var nombre="Daniel"
var year=2020

if(edad>=18){
    console.log(nombre + " tiene "+edad+" anio, es mayor de edad")
    if(edad<=30){
        console.log("eres milenial")
    }else if(edad>=70){
        console.log("eres anciano")
    }else{
        console.log("ya no eres milenials")
    }
}else{
    console.log(nombre + " tiene "+edad+" anios, es menor de edad")
}

if(year==2001||(year>=2020&&year==2020)){
    console.log("el anio acba en 0")
}else{
    console.log("el anio no existe")
}


/*
operadores condicionales
>  
*/