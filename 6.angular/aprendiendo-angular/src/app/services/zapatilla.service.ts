import { Injectable } from "@angular/core";
import {Zapatilla} from "../models/zapatilla";

@Injectable()//inyectar la dependencia para no estar haciendo a cada momento new
export class ZapatillaService{
  public zapatillas:Array<Zapatilla>;
  constructor() {

    this.zapatillas = [
      new Zapatilla("Reebok", "Azul", 70, true),
      new Zapatilla("Nike", "Negras", 90, true),
      new Zapatilla("Adidas", "Gris", 100, false),
      new Zapatilla("Fila", "Blancas", 120, true),
      new Zapatilla("Fila", "Blancas", 120, true)
    ];
  }

  getTexto(){
    return "Hola mundo desde servicio";
  }
  getZapatillas():Array<Zapatilla>{
    return this.zapatillas;
  }
}
