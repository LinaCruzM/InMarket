import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({  
  providedIn: 'root'
})  
export class NotificationsService {

  private apiUrl = 'http://localhost:8000/api/news';

  constructor(private http: HttpClient) {}

  getAllNews(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(this.apiUrl, { headers });
  } 
}
