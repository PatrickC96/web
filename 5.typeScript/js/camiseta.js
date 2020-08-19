var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//metodo adicional para la camiseta
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log("Camiseta estampada con el logo de " + logo);
        };
    };
}
var Camiseta = /** @class */ (function () {
    //metodos (funciones o acciones del objeto)
    //constructores
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    Camiseta.prototype.setColor = function (color) {
        return this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    Camiseta = __decorate([
        estampar('Gucci Gang')
        //clase (model del objeto - plantilla)
    ], Camiseta);
    return Camiseta;
}());
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
var camiseta = new Camiseta("Rojo", "Manga larga", "Nike", "L", 10);
//interface
var camiseta2 = new Camiseta("verde", "Manga larga", "Tommy", "S", 20);
camiseta2.estampacion();
console.log(camiseta2);
//herencia permite heredar todas la caracteristicas de una clase padre hacia una subclase
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Camiseta));
var sudadera = new Sudadera("verde", "Manga larga", "Tommy", "S", 20);
sudadera.setCapucha(true);
sudadera.setColor("Gris");
console.log(sudadera);
