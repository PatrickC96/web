function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    //Add a zero in front of numbers<10
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + " : " + min + " : " + sec;
    var time = setTimeout(function(){ startTime() }, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
console.log("didid")
startTime()

const button = document.getElementById('botonReloj')
const clock = document.getElementById('clockdate')
clock.style.display = 'none'
button.addEventListener('click',()=>{
    if(clock.style.display=='none'){
        clock.style.display = 'block'
    }else{
        clock.style.display = 'none'
    }
})


const tabla = document.getElementById('tablaBody')
var tablaj=document.createElement('tbody')
//parte de inicio
$(document).ready(function(){
    $("#flip").click(function(){

        var elementosJson=[
            {nombre:"Carlos",edad:20,pais:"USA"},
            {nombre:"Carlos",edad:20,pais:"USA"},
            {nombre:"Carlos",edad:20,pais:"USA"},
            {nombre:"Carlos",edad:20,pais:"USA"},
            {nombre:"Carlos",edad:20,pais:"USA"},
            {nombre:"Carlos",edad:20,pais:"USA"}
        ]
        for(index in elementosJson){
            var elementtr = document.createElement("tr")
            var elementtd = document.createElement("td")
            elementtd.append("index['nombre']")
            elementtd.append(index[1])
            elementtd.append(index[2])
            elementtr.append(elementtd)            
            tablaj.append(elementtr)
        }
        tabla.append(tablaj)
      $("#panel").slideToggle("slow");
    });
});



// botones de cololres 


const buttonVerde = document.getElementById('btnVerde')
const buttonRojo = document.getElementById('btnRojo')
const buttonAzul = document.getElementById('btnAzul')
const bodyColor = document.getElementById('cuerpo')
const bonotncolorSpread = [...document.querySelectorAll('#idbutton')]

const tituloColor = document.getElementById('titulo')



buttonVerde.addEventListener('click',()=>{
    bodyColor.style.background='green url(img/hojas.jpg) top no-repeat fixed'
    bonotncolorSpread.map(p=>p.style.background='green')
    tituloColor.style.background='green'
})
buttonRojo.addEventListener('click',()=>{
    bodyColor.style.background='red url(img/rojo.jpg) top  no-repeat fixed'
    bonotncolorSpread.map(p=>p.style.background='red')
    tituloColor.style.background='red'
})
buttonAzul.addEventListener('click',()=>{
    bodyColor.style.background='blue url(img/cielo.jpg) top  no-repeat fixed'
    bonotncolorSpread.map(p=>p.style.background='blue')
    tituloColor.style.background='blue'
})

// En cada página web mostrar el formulario de login falso que nos permita guardar en el localstorage el nombre del usuario y en el caso 
//     de que exista la “sesión” mostrarla. (5 ptos.)
