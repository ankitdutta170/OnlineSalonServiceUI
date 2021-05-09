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
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { AddCardComponent } from './add-card/add-card.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { CardListComponent } from './card-list/card-list.component';
import { UpdateCardComponent } from './update-card/update-card.component';
import { PaymentUpdateComponent } from './payment-update/payment-update.component';

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
    SalonserviceListComponent,
   
    CustomerListComponent,
    CustomerUpdateComponent,
    AddPaymentComponent,
    AddCardComponent,
    PaymentListComponent,
    CardListComponent,
    UpdateCardComponent,
    PaymentUpdateComponent

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
