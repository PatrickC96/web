'use stict';
//DOM es un Document Objet Model:arbol
//de todos los elementos que hay en algo
function print(texto=""){
    //document.write(texto+"<br>")
    console.log(texto)
}


window.addEventListener('load',()=>{

var boton=document.querySelector("#boton")

function cambiarColor(){
    print("haz dado un click ")
    var bg = boton.style.background
    if(bg=="blue none repeat scroll 0% 0%"){
        boton.style.background="red"
        boton.style.padding="10px"
    }else{
        boton.style.background="blue"
    }
    return true
}
//evento clic.

boton.addEventListener('click',function(){
    cambiarColor()
    this.style.border="10 px solid black"
});


//mouse over 
boton.addEventListener('mouseover',function(){
    boton.style.background='yellow'
}) 

//mouse out
boton.addEventListener('mouseout',function(){
    boton.style.background='#ccc'
}) 
//focus ejecutar cualquier funcionalidad

var input = document.querySelector("#campo_nombre")
input.addEventListener('focus',function(){
    print("[focos] estas fuera del focus")
})

//keydown cuando estas pulsando una tecla
input.addEventListener('keydown',function(){
    console.log("[keydown] - estas pulsando una tecla",String.fromCharCode(event.keyCode));
});

//keypress cuando estas pulsando una tecla
input.addEventListener('keypress',function(){
    console.log("[keypress] - Tecla presionada",String.fromCharCode(event.keyCode));
});

//keyup cuando levanto el dedo de tecla
input.addEventListener('keyup',function(){
    console.log("[keyup] - Tecla soltada",String.fromCharCode(event.keyCode));
});

});
