import { Component, OnInit } from '@angular/core';
import { ZapatillaService } from '../services/zapatilla.service';
import { Zapatilla } from '../models/zapatilla';

@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
  providers:[ZapatillaService]//hay que ponerlo como arreglo y es un proveedor
})
export class ZapatillasComponent implements OnInit {
  public titulo:string="Componente zapatillas";
  public zapatillas:Array<Zapatilla>;
  public marcas:String[];
  public color:string;
  public miMarca:string;

  constructor(
    private _zapatillaService: ZapatillaService
  ){
    this.miMarca="Nike";
    this.color='red';
  }

    ngOnInit(){
      this.zapatillas=this._zapatillaService.getZapatillas();
      console.log(this.zapatillas);

    }
}