let cadena:string="hola soy una cadena"

//numero
let nuemero = 12

//boolean
let verdade_falso:boolean=true

//any significa cualquier cosa, permite meter cualquier cosa valor
let cualquier:any="texto"
cualquier = 22

//arrays 
var lenguanes:Array<string>=["php","java","css"]
let years:any[]=["2019",2020,20.21]

//tuberias puede decir el tipo de datos que se acepta no aplica para boolean

let cadena2:string|number= "hola soy la cadena "+2

type letrasNumeros= string|number
var letrasNumeros = "hola"

console.log(letrasNumeros)

//let trabaja a nivel de bloque 
//var trabaja de manera global
var numero1=10
var numero2=12
console.log(numero1,numero2)
if(numero1==10){
    let numero1 = 44
    var numero2 = 55
    console.log(numero1,numero2)
}
console.log(numero1,numero2)
console.log(cadena2)