'use strit'

function holaMundo(texto){
    //ambito local
    var hola_mundo="texto a mostrar"
    console.log(texto)
    console.log(hola_mundo)
}
//ambito global
var numero=12
var texto="hola soy una vairable global"
holaMundo(texto)