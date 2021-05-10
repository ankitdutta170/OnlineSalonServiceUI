import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/model/appointment';

@Component({
  selector: 'app-get-date',
  templateUrl: './get-date.component.html',
  styleUrls: ['./get-date.component.css']
})
export class GetDateComponent implements OnInit {
  appointment:Appointment;
  showList:boolean=false;
  date:Date;
  constructor() { }

  ngOnInit() {
  }

  getList(){
    this.showList=true;
    console.log(this.date);
  }

}
