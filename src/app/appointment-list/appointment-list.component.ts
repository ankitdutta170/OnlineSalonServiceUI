import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/model/appointment';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  appointments: Appointment[];
  message: string = null;
  errorMessage: string = null;
  header: string = "List of Appointments";
  constructor(private service:AppointmentService) { }

  ngOnInit() {
    this.loadData();
  }
  delete(appointment_id: number): void {
    this.service.deleteAppointment(appointment_id).subscribe(
      (response) => {
        this.message = response;
        this.loadData();
      },
      (error) => console.log(error)
    );

  }

  loadData(): void {

    this.service.getAppointments().subscribe(
      (data) => {
        
        this.appointments = data;
        console.log(this.appointments);
        this.errorMessage = null;
      },
      (failResponse) => {
        this.errorMessage = failResponse.error.errorMessage;
      }
    )
  }

}
