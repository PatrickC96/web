import {Component, OnInit} from "@angular/core";
import { Zapatilla } from "../models/zapatilla";
import { ZapatillaService } from "../services/zapatilla.service";

@Component({
  selector:'zapatillas',
  templateUrl:'./zapatillas.component.html',
  providers: [ZapatillaService] //hay que ponerlo como arreglo y es un proveedor
})
export class ZapatillasComponent implements OnInit{
  public titulo:string="Componente de zapatillas";
  public zapatillas:Array<Zapatilla>;
  public marcas:String[];
  public color:string;
  public miMarca:string;
  constructor(
    private _zapatillaService: ZapatillaService
  ) {
    this.miMarca="Nike";//two data binding
    this.color='red';
    //this.color='yellow';
    this.marcas=new Array();
    /*lo cortamos y lo ponemos en service
    this.zapatillas = [
      new Zapatilla("Reebok", "Azul", 70, true),
      new Zapatilla("Nike", "Negras", 90, true),
      new Zapatilla("Adidas", "Gris", 100, false),
      new Zapatilla("Fila", "Blancas", 120, true),
      new Zapatilla("Fila", "Blancas", 120, true)
    ];*/
  }
    ngOnInit(){
    this.zapatillas=this._zapatillaService.getZapatillas();
    //alert(this._zapatillaService.getTexto());
      console.log(this.zapatillas);
      this.getMarcas();
    }

    getMarcas(){
    this.zapatillas.forEach((zapatilla, index)=>{
      //eliminar duplicados
      if (this.marcas.indexOf(zapatilla.marca)<0){
      this.marcas.push(zapatilla.marca);
      }
      console.log(index);
    });
    console.log(this.marcas);
    }

  getMarca(){
    alert(this.miMarca);
  }

  addMarca(){
    this.marcas.push(this.miMarca);
  }

  borrarMarca(index) {
    //delete this.marcas[index];//me borra pero lo convierte en undefined
    this.marcas.splice(index,1);//le paso el indice a borrar y a partir de este borrar 1 elemento
  }

  onBlur(){
    console.log("Has salido del input");
  }

  mostrarPalabra(){//capturar enter
    alert(this.miMarca);
  }

}
