import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/model/appointment';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-take-appointment',
  templateUrl: './take-appointment.component.html',
  styleUrls: ['./take-appointment.component.css']
})
export class TakeAppointmentComponent implements OnInit {

  validationMessages: string[] = null;
  errorMessage: string = null;
  successMessage: string = null;


  constructor(private service:AppointmentService) { }

  ngOnInit() {
  }

  createNew(data: Appointment) {
    console.log(data);
    this.service.addAppointment(data).subscribe(
      (message) => {
        this.successMessage = message;
        this.validationMessages = null;
        this.errorMessage = null;
      },
      (failure) => {
        this.successMessage = null;
        this.validationMessages = JSON.parse(failure.error).errors;
        this.errorMessage = JSON.parse(failure.error).errorMessage;
      }

    )

  }

}
