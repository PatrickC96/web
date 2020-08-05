
//interface
interface CamisetaBase{
    setColor(color)
    getColor()
}

//decoradores
function estampar(logo:string){
    return function(target:Function):void{
        target.prototype.estampacion=function():void{
            console.log("camiseta estampado con el logo de: "+logo)
        }
    }
}
//decorador metodo externo a la clase.
@estampar('Gucci Gang')
//clase modelo del objeto

class Camiseta implements CamisetaBase{

    public color:string
    public modelo:string
    public marca:string
    public talla:string
    public precio:number

    constructor(color,modelo,marca,talla,precio){
        this.color=color
        this.modelo=modelo
        this.marca=marca
        this.talla=talla
        this.precio=precio
    }

    public setColor(color){
        return this.color=color
    }

    public getColor(){
        return this.color
    }
}

// var camiseta = new Camiseta()

// camiseta.color="rojo"
// camiseta.modelo="manga larga"
// camiseta.marca="nike"
// camiseta.talla="L"
// camiseta.precio=10

// console.log(camiseta)

// camiseta.setColor('morado')

// console.log(camiseta)

// var playera = new Camiseta()

// playera.color="amarillo"
// playera.modelo="manga corta"
// playera.marca="adidas"
// playera.talla="M"
// playera.precio=30

// console.log(playera)

var camiseta2 = new Camiseta("majenta","botones","diferente","XL",45)
camiseta2.estampacion()

console.log(camiseta2)


