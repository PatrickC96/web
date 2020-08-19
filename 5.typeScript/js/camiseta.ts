//la clase debe cumplir con esto
//si cambio el nombre de los metodos en la clase eso significa que ya no se cumple
//lo de la interface
interface CamisetaBase{
    //metodos obligatorios que debe tener camiseta
    setColor(color);
    getColor();
}
//metodo adicional para la camiseta
function estampar(logo:string){
    return function(target:Function){
        target.prototype.estampacion=function():void{
            console.log("Camiseta estampada con el logo de "+logo);
        }
    }
}
@estampar('Gucci Gang')
//clase (model del objeto - plantilla)
class Camiseta implements CamisetaBase{
 
//propiedades (caracteristicas del objeto)
//public porque así son los servicios para operaciones crud
//primero todos public
 
public color: string;
public modelo: string;
public marca: string;
public talla: string;
public precio: number;
 
//metodos (funciones o acciones del objeto)
//constructores
constructor(color, modelo,marca,talla,precio){
    this.color=color;
    this.modelo=modelo;
    this.marca=marca;
    this.talla=talla;
    this.precio=precio;
 
}
 
public setColor(color){
    return this.color=color;
}
 
public getColor(){
    return this.color;
}
 
}
/*
var camiseta=new Camiseta();
camiseta.color="Rojo";
camiseta.modelo="Manga larga";
camiseta.marca="Nike";
camiseta.talla="L";
camiseta.precio=10;
 
camiseta.setColor("Verde");
 
console.log(camiseta);
 
var playera=new Camiseta();
playera.color="Azul";
playera.modelo="Manga corta";
playera.marca="Adidas";
playera.talla="L";
playera.precio=15;
*/
 
var camiseta=new Camiseta("Rojo","Manga larga","Nike","L",10);
 
//interface
 
var camiseta2=new Camiseta("verde","Manga larga","Tommy","S",20);
camiseta2.estampacion();
 
console.log(camiseta2);
 
//herencia permite heredar todas la caracteristicas de una clase padre hacia una subclase
class Sudadera extends Camiseta{
    public capucha:boolean;
 
    setCapucha(capucha:boolean){
        this.capucha=capucha;
    }
    getCapucha():boolean{
        return this.capucha;
    }
}
 
var sudadera=new Sudadera("verde","Manga larga","Tommy","S",20);
sudadera.setCapucha(true);
sudadera.setColor("Gris");
console.log(sudadera);
