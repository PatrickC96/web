var bicicleta={
    color:"rojo",
    modelo:"bmx",
    frenos:"disco",
    velocidadMax:"60 Km",
    cambiarColor:function(nuevoColor){
        this.color= nuevoColor
        console.log(this)
    }
}
console.log(bicicleta)
bicicleta.cambiarColor("azul")
console.log(bicicleta)