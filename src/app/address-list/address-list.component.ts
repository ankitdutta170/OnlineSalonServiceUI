import { Component, OnInit } from '@angular/core';
import { Address } from 'src/model/address';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {
  addresses: Address[];
  message: string = null;
  errorMessage: string = null;
  header: string = "List of Addresses";
  constructor(private service:AddressService) { }

  ngOnInit() {
    this.loadData();
  }

  delete(addressId: number): void {
    this.service.deleteAddress(addressId).subscribe(
      (response) => {
        this.message = response;
        this.loadData();
      },
      (error) => console.log(error)
    );

  }

  loadData(): void {

    this.service.getAddresses().subscribe(
      (data) => {
        
        this.addresses = data;
        console.log(this.addresses);
        this.errorMessage = null;
      },
      (failResponse) => {
        this.errorMessage = failResponse.error.errorMessage;
      }
    )
  }
}
