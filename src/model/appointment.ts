import { Time } from "@angular/common";
import { SalonService } from "./salonService";

export interface Appointment{
    appointment_id:number;
    location:string;
    preferred_date:Date;
    preferred_time:Time;
    visit_type:string;
    user_id_fk:number;
    salonService:SalonService
}