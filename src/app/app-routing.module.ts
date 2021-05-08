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


const routes: Routes = [
  {path:'appointments',component:TakeAppointmentComponent,canActivate:[AuthGuard]},
  {path:'showAppointments',component:AppointmentListComponent,canActivate:[AuthGuard]},
  
  {path:'addSalonService',component:AddSalonserviceComponent,canActivate:[AuthGuard]},

  {path:'update/:appointmentId',component:AppointmentUpdateComponent,canActivate:[AuthGuard]},

  {path:'addCustomer',component:AddCustomerComponent},
  {path:'showCustomers',component:CustomerListComponent,canActivate:[AuthGuard]},
  {path:'update/:userId',component:CustomerUpdateComponent,canActivate:[AuthGuard]},
  {path:'login', component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'addBilling',component:AddBillComponent},
  {path:'addAddress',component:AddAddressComponent},
  {path:'showAddresses',component:AddressListComponent},
  {path:'updateAddress',component:AddressUpdateComponent},
  {path:'updateBill',component:BillingUpdateComponent},
  {path:'showBills',component:BillingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
