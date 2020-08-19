import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aprendiendo-angular';
  public descripcion:string;
  public mostrarVideojuego:boolean=true;
  public config;

  constructor(){
    this.title=Configuracion.titulo;
    this.descripcion=Configuracion.descripcion;
    this.config=Configuracion;
  }

  ocultarVideojuego(value){
    this.mostrarVideojuego=value;
  }
}
