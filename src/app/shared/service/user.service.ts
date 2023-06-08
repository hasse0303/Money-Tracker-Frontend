import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:3000/api/user';
  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<any>(this.url);
  }
}
