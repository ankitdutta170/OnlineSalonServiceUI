import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Card } from 'src/model/card';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  baseUrl: string = "http://localhost:8085/cards"
  constructor(private http:HttpClient) { }

  addCard(card: Card) :Observable<any>{
    return this.http.post(this.baseUrl, card, { responseType: 'text' });
  }
  getCards(): Observable<any> {
    const headers = new HttpHeaders({ Authorization: localStorage.getItem('token') });
    return this.http.get(this.baseUrl,{headers});
  }
  getCard(pid: number): Observable<any> {
    const headers = new HttpHeaders({ Authorization: localStorage.getItem('token') });
    return this.http.get(`${this.baseUrl}/${pid}`, { headers })
  }
  deleteCard(pid: number): Observable<any> {
    const headers = new HttpHeaders({ Authorization: localStorage.getItem('token') });
    return this.http.delete(`${this.baseUrl}/${pid}`, { headers, responseType: 'text' })
  }
  updateCard(card: Card): Observable<any> {
    const headers = new HttpHeaders({ Authorization: localStorage.getItem('token') });
    return this.http.put(this.baseUrl, card, { headers, responseType: 'text' });
  }
}
