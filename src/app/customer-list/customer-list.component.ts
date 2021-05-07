import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/model/customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[];
  message: string = null;
  errorMessage: string = null;
  header: string = "List of Customers";
  constructor(private service:CustomerService) { }

  ngOnInit() {
    this.loadData();
  }
  delete(customerId: number): void {
    
    this.service.deleteCustomer(customerId).subscribe(
      (response) => {
        this.message = response;
        this.loadData();
      },
      (error) => console.log(error)
    );

  }

  loadData(): void {

    this.service.getCustomers().subscribe(
      (data) => {
        
        this.customers = data;
        console.log(this.customers);
        this.errorMessage = null;
      },
      (failResponse) => {
        this.errorMessage = failResponse.error.errorMessage;
      }
    )
  }

}
