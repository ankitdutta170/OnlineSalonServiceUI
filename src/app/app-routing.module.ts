import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TakeAppointmentComponent } from './take-appointment/take-appointment.component';
import { AuthGuard } from './auth-guard.service';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AppointmentUpdateComponent } from './appointment-update/appointment-update.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddBillComponent } from './add-bill/add-bill.component';
import { BillingListComponent } from './billing-list/billing-list.component';

const routes: Routes = [
  {path:'appointments',component:TakeAppointmentComponent,canActivate:[AuthGuard]},
  {path:'showAppointments',component:AppointmentListComponent,canActivate:[AuthGuard]},
  {path:'update/:aid',component:AppointmentUpdateComponent,canActivate:[AuthGuard]},
  {path:'addCustomer',component:AddCustomerComponent},
  {path:'login', component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'addBilling',component:AddBillComponent},
  {path:'showBills',component:BillingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
