import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TakeAppointmentComponent } from './take-appointment/take-appointment.component';
import { AuthGuard } from './auth-guard.service';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AppointmentUpdateComponent } from './appointment-update/appointment-update.component';
import { AddSalonserviceComponent } from './add-salonservice/add-salonservice.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddBillComponent } from './add-bill/add-bill.component';
import { BillingListComponent } from './billing-list/billing-list.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { AddressListComponent } from './address-list/address-list.component';
import { AddressUpdateComponent } from './address-update/address-update.component'
import { BillingUpdateComponent } from './billing-update/billing-update.component';


import { SalonServiceUpdateComponent } from './salonservice-update/salonservice-update.component';
import { SalonserviceListComponent } from './salonservice-list/salonservice-list.component';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { AddCardComponent } from './add-card/add-card.component';
import { CardListComponent } from './card-list/card-list.component';
import { UpdateCardComponent } from './update-card/update-card.component';
import { PaymentUpdateComponent } from './payment-update/payment-update.component';

const routes: Routes = [
  {path:'appointments',component:TakeAppointmentComponent,canActivate:[AuthGuard]},
  {path:'showAppointments',component:AppointmentListComponent,canActivate:[AuthGuard]},

  {path:'addSalonService',component:AddSalonserviceComponent,canActivate:[AuthGuard]},
  {path:'updateSalonService/:serviceId',component:SalonServiceUpdateComponent,canActivate:[AuthGuard]},
  {path:'showServices',component:SalonserviceListComponent,canActivate:[AuthGuard]},
  {path:'update/:appointmentId',component:AppointmentUpdateComponent,canActivate:[AuthGuard]},
  {path:'addCustomer',component:AddCustomerComponent},
  {path:'showCustomers',component:CustomerListComponent,canActivate:[AuthGuard]},
  {path:'updateCustomer/:userId',component:CustomerUpdateComponent,canActivate:[AuthGuard]},
  {path:'login', component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'addPayment',component:AddPaymentComponent,canActivate:[AuthGuard]},
  {path:'addCard',component:AddCardComponent,canActivate:[AuthGuard]},
  {path:'showCards',component:CardListComponent,canActivate:[AuthGuard]},
  {path:'showPayments',component:PaymentListComponent,canActivate:[AuthGuard]},
  {path:'updatecard/:cardId',component:UpdateCardComponent,canActivate:[AuthGuard]},
  {path:'updatepayment/:paymentId',component:PaymentUpdateComponent,canActivate:[AuthGuard]},
  {path:'addBilling',component:AddBillComponent,canActivate:[AuthGuard]},
  {path:'addAddress',component:AddAddressComponent,canActivate:[AuthGuard]},
  {path:'showAddresses',component:AddressListComponent,canActivate:[AuthGuard]},
  {path:'updateAddress/:addressId',component:AddressUpdateComponent,canActivate:[AuthGuard]},
  {path:'updateBill/:billId',component:BillingUpdateComponent,canActivate:[AuthGuard]},
  {path:'showBills',component:BillingListComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
