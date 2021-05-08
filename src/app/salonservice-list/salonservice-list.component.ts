import { Component, OnInit } from '@angular/core';
import { SalonServices } from 'src/model/salonservice';
import { SalonService } from '../salon.service';

@Component({
  selector: 'app-salonservice-list',
  templateUrl: './salonservice-list.component.html',
  styleUrls: ['./salonservice-list.component.css']
})
export class SalonserviceListComponent implements OnInit {
  salonservices: SalonServices[];
  message: string = null;
  errorMessage: string = null;
  header: string = "List of SalonServices";
  constructor(private service:SalonService) { }

  ngOnInit() {
    this.loadData();
  }
  delete(serviceId: number): void {
    this.service.deleteSalonService(serviceId).subscribe(
      (response) => {
        this.message = response;
        this.loadData();
      },
      (error) => console.log(error)
    );

  }

  loadData(): void {

    this.service.getSalonServices().subscribe(
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
}
