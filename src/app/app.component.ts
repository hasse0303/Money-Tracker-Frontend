import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'school-management';
  constructor(private http: HttpClient) {
    // const params = new HttpParams().set('max', 10).set('offset',0)
    // http.get('http://localhost:3000/api/user', {params}).subscribe();
  }
}
