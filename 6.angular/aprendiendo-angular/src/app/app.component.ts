import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';
//decorador funcionalidad de una clase para modificar el comportamiento
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',//ubicacion del html
  styleUrls: ['./app.component.css']//hojas de estidos especificos
})
//export como sera llamado el componente por otros
export class AppComponent {
  title = 'Aprendiendo angular';
  public descripcion:string;
  public mostrarVideojuegos:boolean=true;
  public config;

  constructor() {
    this.title=Configuracion.titulo;
    this.descripcion=Configuracion.descripcion;
    this.config=Configuracion;
  }

  ocultarVideoJuegos(value){
    this.mostrarVideojuegos=value;
  }
}
