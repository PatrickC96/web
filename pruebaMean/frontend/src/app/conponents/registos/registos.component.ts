import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {PhotoService} from '../../services/photo.service'

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-registos',
  templateUrl: './registos.component.html',
  styleUrls: ['./registos.component.css']
})
export class RegistosComponent implements OnInit {

  photoSelected: string | ArrayBuffer;
  file: File;

  constructor(private photoService: PhotoService, private router: Router) { }

  ngOnInit() {
  }

  onPhotoSelected(event: HtmlInputEvent): void {
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
      // image preview
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  uploadPhoto(title: HTMLInputElement, description: HTMLTextAreaElement, price:HTMLInputElement,availability:HTMLInputElement) {
    this.photoService
      .createPhoto(title.value, description.value, price.value, availability.value, this.file)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/photos'])
        },
        err => console.log(err)
      );
    return false;
  }


}
