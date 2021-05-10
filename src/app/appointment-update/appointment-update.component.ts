import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from 'src/model/appointment';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointment-update',
  templateUrl: './appointment-update.component.html',
  styleUrls: ['./appointment-update.component.css']
})
export class AppointmentUpdateComponent implements OnInit {
  appointment: Appointment=null;
  validationMessages: string[] = null;
  errorMessage: string = null;
  successMessage: string = null;
  constructor(private service:AppointmentService,private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params) => {
        let aid: number = +params.get('appointmentId');
        console.log(aid);
        this.service.getAppointment(aid).subscribe(
          (data) => {
            this.appointment = data
            console.log(this.appointment)
          },
          (fail) => {
            this.errorMessage = fail.error.errorMessage;
          }
        )
      }
    )
  }
  updated() {
    console.log(this.appointment)
    this.service.updateAppointment(this.appointment).subscribe(
      (message) => {
        this.successMessage=message
        this.validationMessages = null
        this.errorMessage = null
      },
      (failure) => {
        this.successMessage = null;
        this.validationMessages = JSON.parse(failure.error).errors;
        this.errorMessage = JSON.parse(failure.error).errorMessage;
      }

    )

  }

  goBack(){
    this.router.navigate(["appointments"]);
  }



}
