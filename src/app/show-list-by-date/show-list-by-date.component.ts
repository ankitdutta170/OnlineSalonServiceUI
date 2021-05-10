import { Component, Input, OnInit } from '@angular/core';
import { Appointment } from 'src/model/appointment';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'show-list-by-date',
  templateUrl: './show-list-by-date.component.html',
  styleUrls: ['./show-list-by-date.component.css']
})
export class ShowListByDateComponent implements OnInit {
  appointments:Appointment[];
  message: string = null;
  errorMessage: string = null;
  header: string = "List of Appointments";
 
  constructor(private service:AppointmentService) { 

  }
  
  ngOnInit() {
    this.loadData();
  }
  @Input() date:Date;

  delete(appointment_id: number): void {
    this.service.deleteAppointment(appointment_id).subscribe(
      (response) => {
        this.message = response;
        this.loadData();
      },
      (error) => console.log(error)
    );

  }


  loadData():void{
    
    this.service.getAppointmentsByDate(this.date).subscribe(
      (data) => {
        
        this.appointments = data;
        console.log(this.appointments)
        this.errorMessage = null;
      },
      (failResponse) => {
        this.errorMessage = failResponse.error.errorMessage;
      }
    )
  }
}
