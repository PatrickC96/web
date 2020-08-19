import { Component } from '@angular/core';
 
@Component({
    selector: 'videojuego',//etiqueta del componente
    templateUrl: './videojuego.component.html'//vista del componente
  })//no poner : porque es decorador
  export class VideojuegoComponent {
    public titulo:string;
    public listado:string;
  
    constructor(){
      this.titulo="Componente de videojuegos";
      this.listado="Listado de juegos populares";
    }
  }