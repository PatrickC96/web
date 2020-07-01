'use stict';

function print(texto=""){
    //document.write(texto+"<br>")
    console.log(texto)
}

//timer ejecuta un codigo cada cierto intervalo de timpo en milisegndos

window.addEventListener('load',()=>{
    //timers ejecutar un código cada cierto intervalo de tiempo en milisegundos
    //3000 - 3s
    function intervalo(){
        var tiempo=setInterval(function(){
            console.log("setInyerval ejecutado");
            var encabezado=document.querySelector("h1");
            if(encabezado.style.fontSize=="50px"){
                encabezado.style.fontSize=="20px";
            }else{
                encabezado.style.fontSize=="10px";
            }
        },1000);
        return tiempo;
    }
    
    var tiempo=intervalo();
    
    var stop=document.querySelector("#stop");
    stop.addEventListener("click",function(){
        alert("Has parado el intervalo");
        clearInterval(tiempo);
    });
    
    var start=document.querySelector("#start");
    start.addEventListener("click",function(){
        alert("Has iniciado el intervalo");
        intervalo();
    });
    
    });