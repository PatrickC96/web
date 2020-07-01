'use stict';
//DOM es un Document Objet Model:arbol
//de todos los elementos que hay en algo
function print(texto=""){
    //document.write(texto+"<br>")
    console.log(texto)
}

/*
BOM browser object model
trabajar en el navegador
*/
//muestra el tamano maximo.
function getBom(){
    print(window.innerHeight)
    print(window.innerWidth)
    print(screen.height)
    print(screen.width)
}
getBom()

function redirect(url){
    //para habrir el link
    window.location.href=url
}

//redirect("https://www.youtube.com")

function abrirVentana(url){
    //para abrir una nueva ventana 
    window.open(url,"","width=400","height=300")
}

abrirVentana("https://www.youtube.com")