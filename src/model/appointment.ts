import { Time } from "@angular/common";
import { Customer } from "./customer";
import { SalonServices } from "./salonservice";

export interface Appointment{
    appointmentId:number;
    location:string;
    preferredDate:Date;
    preferredTime:Time;
    preferredService:SalonServices
    visitType:string;
    customer:Customer
    

}
