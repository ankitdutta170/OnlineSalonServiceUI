import { Component, OnInit } from '@angular/core';
import { SalonServices } from 'src/model/salonservice';
import { SalonService } from '../salon.service';


@Component({
  selector: 'app-add-salonservice',
  templateUrl: './add-salonservice.component.html',
  styleUrls: ['./add-salonservice.component.css']
})
export class AddSalonserviceComponent implements OnInit {
  validationMessages: string[] = null;
  errorMessage: string = null;
  successMessage: string = null;
  constructor(private service:SalonService) { }

  ngOnInit() {


  }
  createNew(data: SalonServices) {
    console.log(data);
    this.service.addSalonService(data).subscribe(
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
