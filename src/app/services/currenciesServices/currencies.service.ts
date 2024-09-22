import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {

  private apiUrl = 'tu_api_endpoint_aqui'; // Reemplaza con tu URL de API

  constructor(private http: HttpClient) {}

  getCurrencies(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/currencies`);
  }

  deleteCurrency(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/currencies/${id}`);
  }
}
