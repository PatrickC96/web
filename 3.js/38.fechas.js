var fecha = new Date()
console.log(fecha)

console.log("Anio: "+fecha.getFullYear())
console.log("mes: "+fecha.getMonth())
console.log("date: "+fecha.getDate())
console.log("hour: "+fecha.getHours())
console.log("minutes: "+fecha.getMinutes())
console.log("secon: "+fecha.getSeconds())
console.log("time: "+fecha.getTime())

console.log(Math.ceil(Math.random()*1000))

document.getElementById("fecha").innerHTML=fecha