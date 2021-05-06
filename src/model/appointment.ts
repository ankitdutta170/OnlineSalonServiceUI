import { Time } from "@angular/common";
import { SalonService } from "./salonService";

export interface Appointment{
    appointmentId:number;
    location:string;
    preferredDate:Date;
    preferredTime:Time;
    visitType:string;
    user_id_fk:number;
    salonService:SalonService
}