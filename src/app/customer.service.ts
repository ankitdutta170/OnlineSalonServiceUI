import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from 'src/model/customer';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseUrl: string = "http://localhost:8085/customer"
  constructor(private http:HttpClient) { }

  addCustomer(customer: Customer) :Observable<any>{
    return this.http.post(this.baseUrl, customer, { responseType: 'text' });
  }

}
