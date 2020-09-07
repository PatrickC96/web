import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})

//metodos que se pueden usar en la aplicacion
export class EmployeeService {

  selectedEmployee : Employee
  readonly URL_API = 'http://localhost:3000/api/employees'

  employees:Employee[]

  constructor(private http: HttpClient) { }

  getEmployess(){
    return this.http.get(this.URL_API);
  }

  postEmployee(employee:Employee){
    return this.http.post(this.URL_API,employee)
  }
// antulizar los datos
  putEmployee(employee:Employee){
    return this.http.put(this.URL_API+`/${employee._id}`,employee)
  }
// eliminar al empleado
  delateEmployee(_id:string){
    return this.http.delete(this.URL_API+`/${_id}`)
  }
}
