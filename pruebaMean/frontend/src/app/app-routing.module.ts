import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './conponents/home/home.component'
import { SomosComponent } from './conponents/somos/somos.component'
import { ProductosComponent } from './conponents/productos/productos.component'
import { LocalesComponent } from './conponents/locales/locales.component'
import { ContactoComponent } from './conponents/contacto/contacto.component'
import { RegistosComponent } from './conponents/registos/registos.component'
import { ImagenesComponent } from './conponents/imagenes/imagenes.component'

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'somos',component:SomosComponent},
  {path:'productos',component:ProductosComponent},
  {path:'locales',component:LocalesComponent},
  {path:'contactos',component:ContactoComponent},
  {path:'registros',component:RegistosComponent},
  {path:'imagen/:id',component:ImagenesComponent},
  {path:'photos',component:RegistosComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
