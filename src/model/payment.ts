import { Card } from "./card";
import { Billing } from "./billing";

export interface Payment{
    paymentId:number;
    type:string;
    status:string;
    card:Card;
    billing:Billing;
}