var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//decoradores
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log("camiseta estampado con el logo de: " + logo);
        };
    };
}
//decorador metodo externo a la clase.
var Camiseta = /** @class */ (function () {
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
        //clase modelo del objeto
    ], Camiseta);
    return Camiseta;
}());
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
var camiseta2 = new Camiseta("majenta", "botones", "diferente", "XL", 45);
camiseta2.estampacion();
console.log(camiseta2);
