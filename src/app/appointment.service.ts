import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from 'src/model/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  baseUrl: string = "http://localhost:8085/appointments"
  constructor(private http:HttpClient) { }

  addAppointment(appointment: Appointment) :Observable<any>{
    return this.http.post(this.baseUrl, appointment, { responseType: 'text' });
  }

  getAppointments(): Observable<any> {
    const headers = new HttpHeaders({ Authorization: localStorage.getItem('token') });
    return this.http.get(this.baseUrl,{headers});
  }
  getAppointment(aid: number): Observable<any> {
    const headers = new HttpHeaders({ Authorization: localStorage.getItem('token') });
    return this.http.get(`${this.baseUrl}/${aid}`, { headers })
  }
  deleteAppointment(aid: number): Observable<any> {
    const headers = new HttpHeaders({ Authorization: localStorage.getItem('token') });
    return this.http.delete(`${this.baseUrl}/${aid}`, { headers, responseType: 'text' })
  }
  updateAppointment(appointment: Appointment): Observable<any> {
    const headers = new HttpHeaders({ Authorization: localStorage.getItem('token') });
    return this.http.put(this.baseUrl, appointment, { headers, responseType: 'text' });
  }
}
