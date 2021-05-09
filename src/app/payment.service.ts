import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Payment } from 'src/model/payment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PaymentService {
  baseUrl: string = "http://localhost:8085/payments"
  constructor(private http:HttpClient) { }

  addPayment(payment: Payment) :Observable<any>{
    const headers = new HttpHeaders({ Authorization: localStorage.getItem('token') });
    return this.http.post(this.baseUrl, payment, {headers, responseType: 'text' });
  }
  getPayments(): Observable<any> {
    const headers = new HttpHeaders({ Authorization: localStorage.getItem('token') });
    return this.http.get(this.baseUrl,{headers});
  }
  getPayment(pid: number): Observable<any> {
    const headers = new HttpHeaders({ Authorization: localStorage.getItem('token') });
    return this.http.get(`${this.baseUrl}/${pid}`, { headers })
  }
  deletePayment(pid: number): Observable<any> {
    const headers = new HttpHeaders({ Authorization: localStorage.getItem('token') });
    return this.http.delete(`${this.baseUrl}/${pid}`, { headers, responseType: 'text' })
  }
  updatePayment(payment: Payment): Observable<any> {
    const headers = new HttpHeaders({ Authorization: localStorage.getItem('token') });
    return this.http.put(this.baseUrl, payment, { headers, responseType: 'text' });
  }
}
