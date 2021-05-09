import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SalonServices } from 'src/model/salonservice';
@Injectable({
  providedIn: 'root'
})
export class SalonService {
  baseUrl: string="http://localhost:8085/salonservices"
  constructor(private http:HttpClient) { }

  addSalonService(salonservice: SalonServices) :Observable<any>{
    const headers = new HttpHeaders({ Authorization: localStorage.getItem('token') });
    return this.http.post(this.baseUrl, salonservice, {headers, responseType: 'text' });
  }
  getSalonServices(): Observable<any> {
    const headers = new HttpHeaders({ Authorization: localStorage.getItem('token') });
    return this.http.get(this.baseUrl,{headers});
  }
  getSalonService(aid: number): Observable<any> {
    const headers = new HttpHeaders({ Authorization: localStorage.getItem('token') });
    return this.http.get(`${this.baseUrl}/${aid}`, { headers })
  }
  getSalonServiceByName(name: string): Observable<any> {
    const headers = new HttpHeaders({ Authorization: localStorage.getItem('token') });
    return this.http.get(`${this.baseUrl}/name/${name}`, { headers })
  }
  deleteSalonService(aid: number): Observable<any> {
    const headers = new HttpHeaders({ Authorization: localStorage.getItem('token') });
    return this.http.delete(`${this.baseUrl}/${aid}`, { headers, responseType: 'text' })
  }
  updateSalonService(salonService: SalonServices): Observable<any> {
    const headers = new HttpHeaders({ Authorization: localStorage.getItem('token') });
    return this.http.put(this.baseUrl, salonService, { headers, responseType: 'text' });
  }
}

