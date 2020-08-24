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
    this.color='orange';
    this.marcas=new Array();
  }

    ngOnInit(){
      this.zapatillas=this._zapatillaService.getZapatillas();
      console.log(this.zapatillas);
      this.getMarcas();
    }

    getMarcas(){
      this.zapatillas.forEach((zapatilla, index)=>{
        //eliminar duplicados
        if(this.marcas.indexOf(zapatilla.marca)<0){
          this.marcas.push(zapatilla.marca);
        }
        console.log(index);
      });
      console.log(this.marcas);
    }

    onBlur(){
      console.log("Has salido del input");
    }

    mostrarPalabra(){//capturar enter
      alert(this.miMarca);
    }

    getMarca(){
      alert(this.miMarca);
    }

    addMarca(){
      this.marcas.push(this.miMarca);
    }

    borrarMarca(index){
      //delete this.marcas[index];//borra pero lo convierte en undefinded
      this.marcas.splice(index,1);//le paso el indice a borrar y a partir de este borrar 1 elemento
    }


}