import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private _http: HttpClient) {}

  addEmployee(data: any): Observable<any> {
    // Heroku endpoint
    // https://fake-server-app20.herokuapp.com
    return this._http.post('https://my-json-server.typicode.com/lithdoh/employees-database-json-server-typicode/employees', data);
  }

  updateEmployee(id: number, data: any): Observable<any> {
    return this._http.put(`https://my-json-server.typicode.com/lithdoh/employees-database-json-server-typicode/employees/${id}`, data);
  }

  getEmployeeList(): Observable<any> {
    return this._http.get('https://my-json-server.typicode.com/lithdoh/employees-database-json-server-typicode/employees');
  }

  deleteEmployee(id: number): Observable<any> {
    return this._http.delete(`https://my-json-server.typicode.com/lithdoh/employees-database-json-server-typicode/employees/${id}`);
  }
}
