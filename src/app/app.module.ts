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
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddBillComponent } from './add-bill/add-bill.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { BillingListComponent } from './billing-list/billing-list.component';
import { AddressListComponent } from './address-list/address-list.component';
import { AddressUpdateComponent } from './address-update/address-update.component';
import { BillingUpdateComponent } from './billing-update/billing-update.component';

@NgModule({
  declarations: [
    AppComponent,
    TakeAppointmentComponent,
    LoginComponent,
    LogoutComponent,
    AppointmentListComponent,
    AppointmentUpdateComponent,
    AddCustomerComponent,
    AddBillComponent,
    AddAddressComponent,
    BillingListComponent,
    AddressListComponent,
    AddressUpdateComponent,
    BillingUpdateComponent
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
