import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/model/customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {
  customer:Customer=null;
  validationMessages: string[] = null;
  errorMessage: string = null;
  successMessage: string = null;
  constructor(private service: CustomerService,private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params) => {
        let cid: number = +params.get('userId');

        this.service.getCustomer(cid).subscribe(
          (data) => {
            this.customer = data
          },
          (fail) => {
            this.errorMessage = fail.error.errorMessage;
          }
        )
      }
    )
  }

  updated() {
    this.service.updateCustomer(this.customer).subscribe(
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
    this.router.navigate(["showCustomers"]);
  }

}
