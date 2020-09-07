import { Component } from '@angular/core'

@Component({
    selector:'segundo-componente',
    template:'<h3>este es el segundo componente de prueba</h3><br><h1>LOL no mames Funciono</h1>'
})

export class MiSegundoComponente{
    constructor(){
        console.log("el segundo componente funciono")
    }
}