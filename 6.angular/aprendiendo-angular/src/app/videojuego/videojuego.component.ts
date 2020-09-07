import {Component, DoCheck, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'videojuego',//etiqueta del componente
  //primero esto
  /*template: `
    <h2>Componente de Video juegos</h2>
    <ul>
      <li>GTA</li>
      <li>Prince of Persia</li>
      <li>Tekken</li>
      <li>Mario</li>
    </ul>`*/
  //levamos a una vista externa
  templateUrl: './videojuego.component.html'
})//no poner punto y como es decorador
export class VideojuegoComponent implements OnInit, DoCheck,OnDestroy {
  public titulo:string;
  public listado:string;
  constructor() {
    this.titulo="Componente de video juegos";
    this.listado="Listado de los juegos mas populares"
    //console.log("Se ha cargado el componente de video juegos");
  }
  ngOnInit(): void {
    //se ejecuta cada vez que cargo el componente
    //console.log("Soy en on init");
  }

  ngDoCheck(): void {
    //console.log("Soy en DoCheck");
  }

  ngOnDestroy(): void {
    //console.log("Soy en OnDestroy");
  }

  cambiarTitulo(){
    this.titulo="Nuevo titulo del componente";
  }

}
