'use strict'

var nombre = "jose"
var nombres = ["luis","pedro","alberto","carlos","juan",5,true]

var lengujes = new Array("php", "js","java","go")
console.log(nombre)
console.log(nombres)
console.log(nombres[0])
console.log(nombres.length)
console.log(lengujes)

var elementos=parseInt(prompt("que elemento del array quierro?",0))
alert(nombres[elementos])

document.write("<h1>lenguaje de programcion</h1>")
document.write("<ul>")
for(var i = 0;i<lengujes.length;i++){
    document.write("<li>"+i+" - "+lengujes[i]+"</li>")
}

//for each recore todos el arreglo
lengujes.forEach((elemento,indice,arr)=>{
    console.log(arr);
    document.write("<li>"+indice+" - "+elemento+"</li>")
});
document.write("</ul>")
