import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";//para peticiones http

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { ZapatillasComponent } from "./zapatillas/zapatillas.component";
import { CursosComponent } from './cursos/cursos.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component';
import { MiComponente } from "./components/mi-componente/mi-componente.component"
import { CalculadoraPipe } from "./pipes/calculadora.pipe";
import { ContactoComponent } from './contacto/contacto.component';
import { MiSegundoComponente } from './components/segundo-componente/segundo-componente.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component'
//app.modeule.ts carga la infomacion en el componente
@NgModule({//permite declarar el modulo
  declarations: [
    AppComponent,
    VideojuegoComponent,
    ZapatillasComponent,
    CursosComponent,
    HomeComponent,
    ExternoComponent,
    CalculadoraPipe,
    ContactoComponent,
    MiComponente,
    MiSegundoComponente,
    PeliculasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
