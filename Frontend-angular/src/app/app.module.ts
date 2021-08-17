import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './authenticate/login/login.component';
import { HeaderComponent } from './header-login/header.component';
import { CustomerComponent } from './customer/customer.component';
import { EmployeeComponent } from './employee/employee.component';
import { CreateCustomerComponent } from './employee/create-customer/create-customer.component';
import { ViewCustomerComponent } from './employee/view-customer/view-customer.component';
import { CreateAccountComponent } from './employee/create-account/create-account.component';
import { HeaderWorkComponent } from './header-work/header-work.component';
import { HeaderCustComponent } from './header-cust/header-cust.component';
import { GiveAccountComponent } from './employee/give-account/give-account.component';
import { GiveDetailsComponent } from './employee/give-details/give-details.component';
import { TransactionComponent } from './employee/transaction/transaction.component';
// import { JwtInterceptor } from './authenticate/jwt.interceptor';
import { WithdrawComponent } from './customer/withdraw/withdraw.component';
import { TransactComponent } from './customer/transact/transact.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    HeaderComponent,
    CustomerComponent,
    EmployeeComponent,
    CreateCustomerComponent,
    ViewCustomerComponent,
    CreateAccountComponent,
    HeaderWorkComponent,
    HeaderCustComponent,
    GiveAccountComponent,
    GiveDetailsComponent,
TransactionComponent,
WithdrawComponent,
TransactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
