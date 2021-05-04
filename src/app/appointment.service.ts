import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
}
