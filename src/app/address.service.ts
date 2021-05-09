import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Address } from 'src/model/Address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  baseUrl: string = "http://localhost:8085/address"
  constructor(private http:HttpClient) { }
  addAddresses(address: Address) :Observable<any>{
    const headers = new HttpHeaders({ Authorization: localStorage.getItem('token') });
    return this.http.post(this.baseUrl, address, { headers, responseType: 'text' });
  }

  getAddresses(): Observable<any> {
    const headers = new HttpHeaders({ Authorization: localStorage.getItem('token') });
    return this.http.get(this.baseUrl,{headers});
  }
  getAddress(aid: number): Observable<any> {
    const headers = new HttpHeaders({ Authorization: localStorage.getItem('token') });
    return this.http.get(`${this.baseUrl}/${aid}`, { headers })
  }
  deleteAddress(aid: number): Observable<any> {
    const headers = new HttpHeaders({ Authorization: localStorage.getItem('token') });
    return this.http.delete(`${this.baseUrl}/${aid}`, { headers, responseType: 'text' })
  }
  updateAddress(address: Address): Observable<any> {
    const headers = new HttpHeaders({ Authorization: localStorage.getItem('token') });
    return this.http.put(this.baseUrl, address, { headers, responseType: 'text' });
  }
}
