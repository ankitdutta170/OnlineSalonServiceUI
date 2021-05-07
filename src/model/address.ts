import { Time } from "@angular/common";
import {SalonServices} from "./salonservice";

export interface Appointment{
    address_id:number;
    doorNo:string;
    street:string;
    area:string;
    city:string;
    state:string;
    pincode:number;
    user_id_fk:number;
}
