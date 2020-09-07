import { Component, OnInit } from '@angular/core';
import { PeticionesServices } from "../services/peticiones.services";

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesServices]
})
export class ExternoComponent implements OnInit {
  public user:any;
  public userId:any;
  public fecha:any;

  public new_user:any;
  public usuario_guardado;

  constructor(
    private _peticionesService:PeticionesServices
  ) {
    this.userId=1;
    this.new_user={
      "name":"",
      "job":""
    };
  }

  ngOnInit(): void {
    /* primero esto
    this._peticionesService.getUser().subscribe(
      result=>{
        //console.log(result);
        this.user=result.data;
      },
      error=>{
        console.log(<any>error);
      }
    );
    * */
    this.cargaUsuario();
    this.fecha=new Date(2020,3,13);
  }

  cargaUsuario(){
    //this._peticionesService.getUser().subscribe(
    this.user=false;
    this._peticionesService.getUser(this.userId).subscribe(
      result=>{
        //console.log(result);
        this.user=result.data;
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

  onSubmit(form){
    this._peticionesService.addUser(this.new_user).subscribe(
      response=>{
        //console.log(response);
        this.usuario_guardado=response;
        form.reset();
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

}
