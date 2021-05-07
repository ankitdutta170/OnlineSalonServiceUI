import { Time } from "@angular/common";
import { SalonService } from "./salonService";

export interface Billing{
    Bill_id:number;
    amount:number;
    billingDate:Date;
    user_id_fk:number;
    
}