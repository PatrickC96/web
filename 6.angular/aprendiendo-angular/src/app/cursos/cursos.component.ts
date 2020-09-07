import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  public nombre:string;
  public followers:number;

  constructor(
    private _route:ActivatedRoute,
    private _router: Router
  ) { }
//cargar el componente luego del constructor
  ngOnInit(): void {
    //recoger parametros
    this._route.params.subscribe((params: Params)=>{
      //todos los parametros que se pasan por la url
      this.nombre=params.nombre;
      this.followers=+params.followers;//+ convierte a number el string
      //this.nombre=params['nombre']; las dos son validas la primera es mejor
      console.log(typeof +params.followers);

      if(this.nombre=='ninguno'){
        this._router.navigate(['/home']);
      }
    });
  }

  redirigir(){
    this._router.navigate(['/zapatillas']);
    //this._router.navigate(['/videojuego']);
  }

}
