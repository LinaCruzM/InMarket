import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {

  private apiUrl = 'http://localhost:8000/api/currencies'; // Reemplaza con tu URL de API

  constructor(private http: HttpClient) {}

  getCurrencies(): Observable<any> {
    const token = localStorage.getItem('token'); 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(this.apiUrl, { headers });
  }

  createCurrency(data: any): Observable<any> {
    const token = localStorage.getItem('token'); 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(this.apiUrl, data, { headers });
  }
  
  updateCurrency(id: number, data: any): Observable<any> {
    const token = localStorage.getItem('token'); 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, data, { headers });
  }
  

  deleteCurrency(id: number): Observable<any> {
    const token = localStorage.getItem('token'); 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url, { headers });
  }
}
