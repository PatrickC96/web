import { Component, DoCheck, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'videojuego',//etiqueta del componente
    /*template:`
    <h2>Hola</h2>
    <h3>Bienvenido</h3>
    `
    */
    templateUrl: './videojuego.component.html'
  })//vista del componente//no poner : porque es decorador
  export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
    public titulo:string;
    public listado:string;
  
    constructor(){//lo primero que se ejecuta cuando carga un objeto
      this.titulo="Componente de videojuegos";
      this.listado="Listado de juegos populares";
    }
    ngOnInit():void{
      //se ejecuta cada vez que carga el componente
      console.log("Soy el OnInit");
    }
    ngDoCheck():void{
      //se ejecuta cada vez que carga el componente
      console.log("Soy el DoCheck");
    }
    ngOnDestroy():void{
      //se ejecuta cada vez que carga el componente
      console.log("Soy el OnDestroy");
    }
    cambiarTitulo(){
      this.titulo="Nuevo titulo del componente";
    }
    
    

  }