import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  formData  : Employee;
  employeeList: Employee[];
  readonly rootURL = "https://localhost:44379/api";

  constructor(private http: HttpClient) {  }

  addEmployee(formData: Employee){
    return this.http.post(this.rootURL + '/Employee', formData);
  }

  // getEmployees2() {
  //   return this.http.get(this.rootURL + '/Employee')
  //   .toPromise().then(res => this.employeeList = res as Employee[]);
  // }

  getEmployees() {
    return this.http.get(this.rootURL + '/Employee')
    //.toPromise().then(res => this.employeeList = res as Employee[]);
  }

  updateEmployee(formData: Employee) {
    return this.http.put(this.rootURL+'/Employee', formData);
  }

  deleteEmployee(id: number) {
    return this.http.delete(this.rootURL + '/Employee/' + id);
  }


}


