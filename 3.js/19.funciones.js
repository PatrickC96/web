'use strict'

function mensaje(){
    console.log("hola")
    alert("exacto")
    return "bienvenido"
}

function calculadora(numero1,numero2){
    console.log("Suma: "+(numero1+numero2))
    console.log("Resta: "+(numero1-numero2))
    console.log("Multiplicaion: "+(numero1*numero2))
    console.log("Divicion: "+(numero1/numero2))
    console.log("*******")
}
//parametros opcionales
function calculadora2(numero1,numero2,mostrar=false){
    if(mostrar==false){
        console.log("Suma: "+(numero1+numero2))       
        console.log("Resta: "+(numero1-numero2))
        console.log("Multiplicaion: "+(numero1*numero2))
        console.log("Divicion: "+(numero1/numero2))
    }else{
        document.write("Suma: "+(numero1+numero2)+"<br>")
        document.write("Resta: "+(numero1-numero2)+"<br>")
        document.write("Multiplicaion: "+(numero1*numero2)+"<br>")
        document.write("Divicion: "+(numero1/numero2)+"<br>")   
    }
}

function proConsola(numero1,numero2){
    console.log("Suma: "+(numero1+numero2))       
    console.log("Resta: "+(numero1-numero2))
    console.log("Multiplicaion: "+(numero1*numero2))
    console.log("Divicion: "+(numero1/numero2))
    console.log("*******")
}
function porPantalla(numero1,numero2){
    document.write("Suma: "+(numero1+numero2)+"<br>")
    document.write("Resta: "+(numero1-numero2)+"<br>")
    document.write("Multiplicaion: "+(numero1*numero2)+"<br>")
    document.write("Divicion: "+(numero1/numero2)+"<br>") 
    document.write("*******<br>") 
}

function calculadora3(numero1,numero2,mostrar=false){
    if(mostrar==false){
        proConsola(numero1,numero2)
        return true
    }else{
        porPantalla(numero1,numero2)
    }
}

var resultado = calculadora3(4,5,2)
console.log(resultado)
resultado = calculadora3(8,7)
console.log(resultado)