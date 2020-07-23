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


const inputNombre = document.getElementById('nombre')
const inputEmail= document.getElementById('email')
const inputPass = document.getElementById('password')

const btnEnviar = document.getElementById('btnEnviar')

btnEnviar.addEventListener('click',()=>{    
    mostrarRegistos()
})

function mostrarRegistos() {

    if(!(inputNombre.value.trim().length==0||inputEmail.value.trim().length==0||inputPass.value.length==0)){
        var estado=true
        for (let i = 0; i < localStorage.length-1; i++) {
            let key = localStorage.key(i);
            if(key==inputNombre.value){
                alert("Logeado con Exito !!!!!")
                estado=false
            }  
        }
        if(estado){
            var usuario={
                mail:inputEmail.value,
                passwor:inputPass.value
            }
            localStorage.setItem(inputNombre.value,JSON.stringify(usuario))
            alert("Datos Registrados !!!!!!1")            
        }
        inputNombre.value = ''
        inputEmail.value = ''
        inputPass.value = ''
    }        
}


//accoridion
const buttonAcordion = document.getElementById('botonAcordion')
const acordion = document.getElementById('accionAcordion')
buttonAcordion.addEventListener('click',()=>{
    $("#accionAcordion").slideToggle("slow");        
    
    $( "#accordion-1" ).accordion({
        collapsible: true
    });
})

//formularios


const buttonFormulario = document.getElementById('botonFomulario')
const textosTitulos = document.getElementById('textosTitulos')
const formularioTexto = document.getElementById('formularioTexto')
formularioTexto.style.display = 'none'
buttonFormulario.addEventListener('click',()=>{
    if(textosTitulos.style.display=='none'){
        textosTitulos.style.display = 'block'
        formularioTexto.style.display = 'none'
    }else{
        textosTitulos.style.display = 'none'
        formularioTexto.style.display = 'block'
    }
})

//calculos formulario
var f_nombre = document.getElementById('f_nombre').value
var f_apellido= document.getElementById('f_apellido').value
var f_numero = document.getElementById('f_numero').value
var f_email = document.getElementById('f_email').value
var f_opcion= document.getElementById('f_opcion').value
var f_mensaje = document.getElementById('f_mensaje').value
const f_enviar = document.getElementById('f_enviar')



f_enviar.addEventListener('click',()=>{    
    enviarRegistos()
})

function enviarRegistos() {

    if(!(f_nombre.trim().length==0||
    f_apellido.trim().length==0||
    f_numero.trim().length==0||
    f_email.trim().length==0||
    f_opcion.trim().length==0||
    f_mensaje.trim().length==0)){
        alert("Todos los datos fueron registrados con exito")

    }else{
        alert("Debe llenar todos los campos")
    }   
}


//usuarios y fech
// 10. En la sección "Mis amigos" procesar la información de la siguiente URL: https://rickandmortyapi.com/api/character/?page=2, como se 
//     pide a continuación: (10 ptos.)

//     1) Busque los tipos de "name"
//     2) Busque los tipos de "type"
//     3) Busque los tipos de "gender"
//     4) Busque los tipos de "status"
//     5) Busque los tipos de "name" de origin
//     6) Busque los tipos de "name" de location
//     7) Clasifique y cree diferentes arreglos dependiendo del type, gender, status, origin y location.
//     8) Cree un arreglo del abecedario, revisar si existe al menos un personaje con cada letra del abecedario.

//     Ejemplo de respuesta:

//     const arregloRespuesta =[
//         {
//             a:true
//         },
//         {
//             b:false
//         },
//     ];

//     9) Revisar si todos los personajes tienen un estatus vivo.
//     10) Calcular cuantos episodes existen de cada personaje:

//     Ej:

//     const respuesta = [
//         ...,
//         {
//             nombre:Rick Sanchez,
//             numeroEpisodios:30
//         },
//         ...
// ]

function getUsuarios(){
    return fetch('https://rickandmortyapi.com/api/character/?page=2')
}