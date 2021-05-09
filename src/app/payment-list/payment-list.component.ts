import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/model/payment';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit {
  payments: Payment[];
  message: string = null;
  errorMessage: string = null;
  header: string = "List of payments";
  constructor(private service:PaymentService) { }

  ngOnInit() {
    this.loadData();
  }
  delete(payment_id: number): void {
    this.service.deletePayment(payment_id).subscribe(
      (response) => {
        this.message = response;
        this.loadData();
      },
      (error) => console.log(error)
    );

  }

  loadData(): void {

    this.service.getPayments().subscribe(
      (data) => {
        
        this.payments = data;
        
        this.errorMessage = null;
      },
      (failResponse) => {
        this.errorMessage = failResponse.error.errorMessage;
      }
    )
  }


}
