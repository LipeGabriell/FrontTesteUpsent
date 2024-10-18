import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private http: HttpClient) {}
  private expressUrl = 'http://localhost:8000';

  getAll(): Observable<any> {
    var teste = this.http.get(`${this.expressUrl}/workers/list`);
    // console.log("Retornando: " + teste)
    return teste;
  }

  getSpecific(cpf: string): Observable<any> {
    return this.http.get(`${this.expressUrl}/workers/specific`);
  }

  getProfissions(): Observable<any> {
    return this.http.get(`${this.expressUrl}/workers/profissions`);
  }

  postData(data: any): Observable<any> {
    return this.http.post(`${this.expressUrl}/workers/register`, data);
  }

  deleteData(cpf: string): Observable<any> {
    return this.http.delete(`${this.expressUrl}/workers/delete`, {
      body: { cpf: cpf },
    });
  }
}
