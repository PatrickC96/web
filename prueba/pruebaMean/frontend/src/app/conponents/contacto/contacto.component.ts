import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {ContactoService} from '../../services/contacto.service'

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  
  latitudeText = '';
  longitudeText = '';

  constructor(private contactoService: ContactoService, private router: Router) { }
  ngOnInit(): void { 
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position){
        console.log("Latitude: " + position.coords.latitude +   " Longitude: " + position.coords.longitude)
        alert("Latitude: " + position.coords.latitude +   " Longitude: " + position.coords.longitude)  
        this.latitudeText = position.coords.latitude+''
        this.longitudeText = position.coords.longitude+''
      },function(){
        console.log("algo fue mal")   
      });
    } else {
      console.log("Geolocation is not supported by this browser.")    
    }

  }

  createContacto(nombre: HTMLInputElement,
    email: HTMLInputElement,
    numTel1: HTMLInputElement,
    numTel2:HTMLInputElement) {
    this.contactoService
      .createContacto(nombre.value,email.value,this.latitudeText,this.longitudeText,numTel1.value,numTel2.value)
      .subscribe(
        res => {
          console.log(res);
          console.log('contacto creado')
          this.router.navigate(['/contactos'])
        },
        err => {console.log(err)          
          this.router.navigate(['/home'])}        
      );
    return false;
  }

}
