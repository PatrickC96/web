//importar modulos del router de angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//importar los componentes
import { ZapatillasComponent } from "./zapatillas/zapatillas.component";
import { VideojuegoComponent } from "./videojuego/videojuego.component";
import { CursosComponent } from "./cursos/cursos.component";
import { HomeComponent } from "./home/home.component";
import { ExternoComponent } from "./externo/externo.component";
import { ContactoComponent } from "./contacto/contacto.component";

//array de rutas
const routes: Routes = [
  {path:'', component:HomeComponent},//ng generate component home
  {path:'home', component:HomeComponent},//cuando haga el nav hago esto
  {path:'zapatillas', component: ZapatillasComponent},
  {path:'videojuego', component: VideojuegoComponent},
  {path:'cursos', component: CursosComponent},//vamos a trabajar pasando parametros
  {path:'cursos/:nombre/:followers', component: CursosComponent},//nombre es opcional
  //{path:'cursos/:nombre/:apellido', component: CursosComponent},//apellido es opcional
  {path:'externo', component: ExternoComponent},
  {path:'contacto', component: ContactoComponent},
  {path: '**', component:HomeComponent}//ruta 404 cuando no hay lo que se quiere cargar
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
