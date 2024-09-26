import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  private apiUrl = 'http://localhost:8000/news'; // Cambia la URL según sea necesario

  constructor(private http: HttpClient) {}

  getAllNews(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getNewById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
