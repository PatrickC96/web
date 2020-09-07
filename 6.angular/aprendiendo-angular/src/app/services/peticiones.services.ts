import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

@Injectable()//inyectar la dependencia para no estar haciendo a cada momento new
export class PeticionesServices{
//utilizamos https://reqres.in/
  public url:string;
  constructor(
    public _http:HttpClient
  ) {
    this.url="https://reqres.in/";//    /api/users/2
}

//getUser():Observable<any>{
  getUser(userId):Observable<any>{
    //return this._http.get(this.url+'api/users/2');//peticion ajax por http
    return this._http.get(this.url+'api/users/'+userId);//peticion ajax por http
}
//luego de validar formularios
  addUser(user):Observable<any>{
    let params=JSON.stringify(user);
    let headers=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url+'api/users',params,{headers:headers});
  }
}
