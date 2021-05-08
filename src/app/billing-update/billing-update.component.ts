import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Billing } from 'src/model/billing';
import { BillService } from '../bill.service';

@Component({
  selector: 'app-billing-update',
  templateUrl: './billing-update.component.html',
  styleUrls: ['./billing-update.component.css']
})
export class BillingUpdateComponent implements OnInit {
  bill: Billing=null;
  validationMessages: string[] = null;
  errorMessage: string = null;
  successMessage: string = null;
  constructor(private service:BillService,private route: ActivatedRoute, 
    private router: Router) { }

    ngOnInit() {
      this.route.paramMap.subscribe(
        (params) => {
          let aid: number = +params.get('billId');
  
          this.service.getBill(aid).subscribe(
            (data) => {
              this.bill = data
              console.log(this.bill)
            },
            (fail) => {
              this.errorMessage = fail.error.errorMessage;
            }
          )
        }
      )
    }
    updated() {
      console.log(this.bill)
      this.service.updateBill(this.bill).subscribe(
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
      this.router.navigate(["showBills"]);
    }
  
  

}
