import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypesSolicitudeService {

  private apiUrl = 'http://localhost:8000/api/type-solicitations'; // Cambia la URL según sea necesario

  constructor(private http: HttpClient) {}

  getTypeSolicitations(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createTypeSolicitation(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  updateTypeSolicitation(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  deleteTypeSolicitation(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
