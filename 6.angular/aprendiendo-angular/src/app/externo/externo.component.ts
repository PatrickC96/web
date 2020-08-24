import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css']
})
export class ExternoComponent implements OnInit {

  public fecha:any;
 
  constructor() { }
 
  ngOnInit(): void {
    this.fecha=new Date(2020,8,24);
  }

}
