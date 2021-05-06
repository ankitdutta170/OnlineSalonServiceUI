import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {SalonServiceUpdateComponent} from './salonservice-update.component';
@Component({
  selector: 'app-salonservice-update',
  templateUrl: './salonservice-update.component.html',
  styleUrls: ['./salonservice-update.component.css']
})
export class SalonServiceUpdateComponent implements OnInit {
  appointment: SalonService=null;
  validationMessages: string[] = null;
  errorMessage: string = null;
  successMessage: string = null;
  constructor(private service:SalonService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params) => {
        let aid: number = +params.get('serviceId');

        this.service.getEmployee(aid).subscribe(
          (data) => {
            this.SalonService = data
          },
          (fail) => {
            this.errorMessage = fail.error.errorMessage;
          }
        )
      }
    )
  }
  updated() {
    console.log(this.salonservice)
    this.service.updateSalonservice(this.salonservice).subscribe(
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
    this.router.navigate(["showServices"]);
  }



}
