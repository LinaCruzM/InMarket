import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:8000/api'; // Cambia esto por la URL de tu API backend

  constructor(private http: HttpClient) {}

  login(per_mail: string, per_password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { per_mail, per_password });
  }

}
