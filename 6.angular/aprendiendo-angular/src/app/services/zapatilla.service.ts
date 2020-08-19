import { Injectable } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";

@Injectable()//inyectar la dependencia para no estar haciendo a cada rato un new
export class ZapatillaService{
    public zapatillas:Array<Zapatilla>;

    constructor(){
        this.zapatillas=[
            new Zapatilla ("Rebook","Azul",70,true),
            new Zapatilla ("Nike","Negra",90,true),
            new Zapatilla ("Adidas","Gris",100,false),
            new Zapatilla ("Fila","Blanca",120,true),
            new Zapatilla ("Fila","Rojo",120,true),
        ];
    }

    getZapatillas():Array<Zapatilla>{
        return this.zapatillas;
    }

}