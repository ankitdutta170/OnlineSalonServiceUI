import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Billing } from 'src/model/billing';
@Injectable({
  providedIn: 'root'
})
export class BillService {

  baseUrl: string = "http://localhost:8085/bill"
  constructor(private http:HttpClient) { }

  addBill(bill: Billing) :Observable<any>{
    const headers = new HttpHeaders({ Authorization: localStorage.getItem('token') });
    return this.http.post(this.baseUrl, bill, {headers, responseType: 'text' });
  }

  getBills(): Observable<any> {
    const headers = new HttpHeaders({ Authorization: localStorage.getItem('token') });
    return this.http.get(this.baseUrl,{headers});
  }
  getBill(aid: number): Observable<any> {
    const headers = new HttpHeaders({ Authorization: localStorage.getItem('token') });
    return this.http.get(`${this.baseUrl}/${aid}`, { headers })
  }
  deleteBill(aid: number): Observable<any> {
    const headers = new HttpHeaders({ Authorization: localStorage.getItem('token') });
    return this.http.delete(`${this.baseUrl}/${aid}`, { headers, responseType: 'text' })
  }
  updateBill(billing: Billing): Observable<any> {
    const headers = new HttpHeaders({ Authorization: localStorage.getItem('token') });
    return this.http.put(this.baseUrl, billing, { headers, responseType: 'text' });
  }
}
