import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/model/appointment';
import { Customer } from 'src/model/customer';
import { SalonServices } from 'src/model/salonservice';
import { AppointmentService } from '../appointment.service';
import { CustomerService } from '../customer.service';
import { SalonService } from '../salon.service';

@Component({
  selector: 'app-take-appointment',
  templateUrl: './take-appointment.component.html',
  styleUrls: ['./take-appointment.component.css']
})
export class TakeAppointmentComponent implements OnInit {
  customers:Customer[];
  salonservices:SalonServices[];
  validationMessages: string[] = null;
  errorMessage: string = null;
  successMessage: string = null;


  constructor(private service:AppointmentService,private salonService:SalonService,private customerService:CustomerService) { }

  ngOnInit() {
    this.getSalonService();
    this.getCustomers();
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
  getSalonService(){
    this.salonService.getSalonServices().subscribe(
      (data) => {
        
        this.salonservices = data;
        console.log(this.salonservices);
        this.errorMessage = null;
      },
      (failResponse) => {
        this.errorMessage = failResponse.error.errorMessage;
      }
    )


  }
  getCustomers(){
    this.customerService.getCustomers().subscribe(
      (data) => {
        
        this.customers = data;
        console.log(this.customers)
        this.errorMessage = null;
      },
      (failResponse) => {
        this.errorMessage = failResponse.error.errorMessage;
      }
    )


  }

}
