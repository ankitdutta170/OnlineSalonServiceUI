import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TakeAppointmentComponent } from './take-appointment/take-appointment.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AppointmentUpdateComponent } from './appointment-update/appointment-update.component';
import { AddSalonserviceComponent } from './add-salonservice/add-salonservice.component';
import { SalonServiceUpdateComponent } from './salonservice-update/salonservice-update.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { SalonserviceListComponent } from './salonservice-list/salonservice-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TakeAppointmentComponent,
    LoginComponent,
    LogoutComponent,
    AppointmentListComponent,
    AppointmentUpdateComponent,
    AddSalonserviceComponent,
    SalonServiceUpdateComponent,
    AddCustomerComponent,
    SalonserviceListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
