

'use stric'

//fundion anonima 
//funcion que no tiene nombre

var pelicula=function(nombre){
    return "la pelicula es: "+nombre
}


//callback es una funcion que se ejecuta dentro de otra funcion
function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var suma = numero1+numero2
    sumaYmuestra(suma)
    sumaPorDos(suma)
    return suma
}
//funciones flecha
/*sumame(5,7,
    dato=>{
        console.log("la suma es: ",dato)
    },
    function(dato){
        console.log("la suma por dos es: ",dato*2)
    }
)
*/

function resta(numero1,numero2){
    console.log("resta es: "+(numero1-numero2))
}
//la funcipn flecha es similar a la funcion anonima
var resultado = (numero1,numero2)=>{
    console.log("resta es: "+(numero1-numero2))
}


//console.log(resultado(1,2));

//(function (){ console.log("Hello!!") })()

var x = (x, y) => { return x * y };

console.log(x(1,2))
