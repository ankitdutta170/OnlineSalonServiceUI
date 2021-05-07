import { Time } from "@angular/common";
import { SalonServices } from "./salonservice";

export interface Appointment{
    appointmentId:number;
    location:string;
    preferredDate:Date;
    preferredTime:Time;
    preferredService:SalonServices
    visitType:string;
    user_id_fk:number;
    

}
