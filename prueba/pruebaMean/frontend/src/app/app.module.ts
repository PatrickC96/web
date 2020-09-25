import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './conponents/navbar/navbar.component';
import { ContactoComponent } from './conponents/contacto/contacto.component';
import { HomeComponent } from './conponents/home/home.component';
import { ImagenesComponent } from './conponents/imagenes/imagenes.component';
import { SomosComponent } from './conponents/somos/somos.component';
import { ProductosComponent } from './conponents/productos/productos.component';
import { LocalesComponent } from './conponents/locales/locales.component';
import { RegistosComponent } from './conponents/registos/registos.component';
import { DatatableComponent } from './conponents/datatable/datatable.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactoComponent,
    HomeComponent,
    ImagenesComponent,
    SomosComponent,
    ProductosComponent,
    LocalesComponent,
    RegistosComponent,
    DatatableComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
