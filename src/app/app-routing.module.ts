import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TakeAppointmentComponent } from './take-appointment/take-appointment.component';

const routes: Routes = [
  {path:'appointments',component:TakeAppointmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
