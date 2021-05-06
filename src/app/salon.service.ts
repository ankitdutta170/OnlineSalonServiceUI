import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SalonServices } from 'src/model/salonservice';
@Injectable({
  providedIn: 'root'
})
export class SalonService {
  baseUrl: string = "http://localhost:8085/appointments"
  constructor(private http:HttpClient) { }

  addSalonService(salonservice: SalonServices) :Observable<any>{
    return this.http.post(this.baseUrl, salonservice, { responseType: 'text' });
  }
}
