import { Component, OnInit } from '@angular/core';
import { SalonServices } from 'src/model/salonservice';
@Component({
  selector: 'app-salonservice-list',
  templateUrl: './salonservice-list.component.html',
  styleUrls: ['./salonservice-list.component.css']
})
export class SalonserviceListComponent implements OnInit {
  appointments: SalonServices[];
  message: string = null;
  errorMessage: string = null;
  header: string = "List of SalonServices";
  constructor(private service:SalonServices) { }

  ngOnInit() {
    this.loadData();
  }
  delete(service_id: number): void {
    this.service.deleteSalonService(service_id).subscribe(
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

        this.salonservice = data;
        console.log(this.salonservice);
        this.errorMessage = null;
      },
      (failResponse) => {
        this.errorMessage = failResponse.error.errorMessage;
      }
    )
  }
}
