import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import {Contacto} from '../interfaces/Contacto'

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  URI = 'http://localhost:4000/api/contacto';

  constructor(private http: HttpClient) { }

  createContacto(
    nombre: string,
    email: string,
    Latitude: string,
    Longitude: string,   
    numTel1: string,
    numTel2: string) {
      const fd = new FormData();
      fd.append('title', nombre);
      fd.append('title', email);
      fd.append('title', Latitude);
      fd.append('title', Longitude);
      fd.append('title', numTel1);
      fd.append('title', numTel2);
      return this.http.post(this.URI, fd);
    }

  // getContacto() {
  //   return this.http.get<Contacto[]>(this.URI);
  // }

  // getContacto(id: string) {
  //   return this.http.get<Contacto>(`${this.URI}/${id}`);
  // }

  // deleteContacto(id: string) {
  //   return this.http.delete(`${this.URI}/${id}`);
  // }

  // updateContacto(
  //   id: string,
  //   nombre: string,
  //   email: string,
  //   Latitude: string,
  //   Longitude: string,   
  //   numTel1: string,
  //   numTel2: string) {
  //   return this.http.put(`${this.URI}/${id}`, {nombre, email, Latitude, Longitude, numTel1, numTel2});
  // }
}
