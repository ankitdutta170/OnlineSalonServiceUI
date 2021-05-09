import { Time } from "@angular/common";


export interface Billing{
    billId:number;
    amount:number;
    billingDate:Date;
    user_id_fk:number;

}
