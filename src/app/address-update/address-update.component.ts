import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'src/model/address';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-address-update',
  templateUrl: './address-update.component.html',
  styleUrls: ['./address-update.component.css']
})
export class AddressUpdateComponent implements OnInit {
  address: Address=null;
  validationMessages: string[] = null;
  errorMessage: string = null;
  successMessage: string = null;
  constructor(private service:AddressService,private route: ActivatedRoute, 
    private router: Router) { }

    ngOnInit() {
      this.route.paramMap.subscribe(
        (params) => {
          let aid: number = +params.get('addressId');
  
          this.service.getAddress(aid).subscribe(
            (data) => {
              this.address = data
              console.log(this.address)
            },
            (fail) => {
              this.errorMessage = fail.error.errorMessage;
            }
          )
        }
      )
    }
    updated() {
      console.log(this.address)
      this.service.updateAddress(this.address).subscribe(
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
      this.router.navigate(["showAddresses"]);
    }

}
