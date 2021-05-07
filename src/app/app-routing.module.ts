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
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';

const routes: Routes = [
  {path:'appointments',component:TakeAppointmentComponent,canActivate:[AuthGuard]},
  {path:'showAppointments',component:AppointmentListComponent,canActivate:[AuthGuard]},
<<<<<<< HEAD
  {path:'update/:aid',component:AppointmentUpdateComponent,canActivate:[AuthGuard]},
  {path:'addSalonService',component:AddSalonserviceComponent,canActivate:[AuthGuard]},
=======
  {path:'update/:appointmentId',component:AppointmentUpdateComponent,canActivate:[AuthGuard]},
>>>>>>> 92807f2c34ef69efc6d184c21e72b14343186a45
  {path:'addCustomer',component:AddCustomerComponent},
  {path:'showCustomers',component:CustomerListComponent,canActivate:[AuthGuard]},
  {path:'update/:userId',component:CustomerUpdateComponent,canActivate:[AuthGuard]},
  {path:'login', component:LoginComponent},
  {path:'logout',component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
