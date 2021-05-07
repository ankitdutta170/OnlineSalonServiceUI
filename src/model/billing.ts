import { Time } from "@angular/common";
import { SalonServices } from "./salonservice";

export interface Appointment{
    Bill_id:number;
    amount:number;
    billingDate:Date;
    user_id_fk:number;

}
