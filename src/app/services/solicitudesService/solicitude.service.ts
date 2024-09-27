import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ 
  providedIn: 'root'
}) 
export class SolicitudeService {
  private apiUrl = 'http://localhost:8000/api/solicitations'; // Cambia la URL si es necesario
  private personsUrl = 'http://localhost:8000/api/persons'; // Endpoint para solicitantes
  private typesUrl = 'http://localhost:8000/api/type/solicitations'; // Endpoint para tipos de solicitud
  private suppliersUrl = 'http://localhost:8000/api/suppliers'; // Endpoint para proveedores
  private currenciesUrl = 'http://localhost:8000/api/currencies'; 

  constructor(private http: HttpClient) {}

  getSolicitations(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(this.apiUrl, { headers });
  }

  getPersons(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(this.personsUrl, { headers });
  }

  getTypes(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(this.typesUrl, { headers });
  }

  getSuppliers(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(this.suppliersUrl, { headers });
  }

  getCurrencies(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(this.currenciesUrl, { headers });
  }

  createSolicitation(data: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(this.apiUrl, data, { headers });
  }
 
  updateSolicitation(id: number, data: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, data, { headers });
  }

  deleteSolicitation(id: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url, { headers });
  }
}
