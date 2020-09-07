import { Component } from '@angular/core'


@Component({
    selector:'mi-componente',
    templateUrl: './mi-componente.component.html'
})

export class MiComponente{
    public titulo:string
    public comentario:string
    public year:number
    constructor(){
        this.titulo='este es el titulo desde las variables'
        this.comentario='este es el comentario desde las variables'
        this.year=2020
        console.log("mi componenten cargado")
    }
}