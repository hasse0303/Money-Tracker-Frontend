import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:3001/api/user';
  constructor(private http: HttpClient) { }

  list(params?: HttpParams) {
    return this.http.get<any>(this.url, {params});
  }
}
