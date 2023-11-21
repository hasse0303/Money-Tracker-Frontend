import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url = 'http://localhost:3001/api/employee';
  constructor(private http: HttpClient) { }

  list(params?: HttpParams) {
    return this.http.get<any>(this.url, {params});
  }
}
