import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  {path:'home',component: HomeComponent },
  {path:'videojuego',component:VideojuegoComponent},
  {path:'cursos',component:CursosComponent},//paso de parametros
  {path:'cursos/:nombre/:followers',component:CursosComponent},
  {path:'zapatillas',component:ZapatillasComponent},
  {path:'contacto',component:ContactoComponent},
  //{path:'**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
