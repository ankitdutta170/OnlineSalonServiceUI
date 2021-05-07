import { Component, OnInit } from '@angular/core';
import { Billing } from 'src/model/billing';
import { BillService } from '../bill.service';
@Component({
  selector: 'app-billing-list',
  templateUrl: './billing-list.component.html',
  styleUrls: ['./billing-list.component.css']
})
export class BillingListComponent implements OnInit {
  bills: Billing[];
  message: string = null;
  errorMessage: string = null;
  header: string = "List of Bills";
  constructor(private service:BillService) { }

  ngOnInit() {
    this.loadData();
  }

  delete(billingId: number): void {
    this.service.deleteBill(billingId).subscribe(
      (response) => {
        this.message = response;
        this.loadData();
      },
      (error) => console.log(error)
    );

  }

  loadData(): void {

    this.service.getBills().subscribe(
      (data) => {
        
        this.bills = data;
        console.log(this.bills);
        this.errorMessage = null;
      },
      (failResponse) => {
        this.errorMessage = failResponse.error.errorMessage;
      }
    )
  }

}
