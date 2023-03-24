import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private _http: HttpClient) {}

  addEmployee(data: any): Observable<any> {
    return this._http.post('https://fake-server-app20.herokuapp.com/employees', data);
  }

  updateEmployee(id: number, data: any): Observable<any> {
    return this._http.put(`https://fake-server-app20.herokuapp.com/employees/${id}`, data);
  }

  getEmployeeList(): Observable<any> {
    return this._http.get('https://fake-server-app20.herokuapp.com/employees');
  }

  deleteEmployee(id: number): Observable<any> {
    return this._http.delete(`https://fake-server-app20.herokuapp.com/employees/${id}`);
  }
}
