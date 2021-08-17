import { WithdrawComponent } from './customer/withdraw/withdraw.component';
import { TransactionComponent } from './employee/transaction/transaction.component';
import { GiveDetailsComponent } from './employee/give-details/give-details.component';
import { GiveAccountComponent } from './employee/give-account/give-account.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { LoginComponent } from './authenticate/login/login.component';
import { CustomerComponent } from './customer/customer.component';
import { CreateAccountComponent } from './employee/create-account/create-account.component';
import { CreateCustomerComponent } from './employee/create-customer/create-customer.component';
import { EmployeeComponent } from './employee/employee.component';
import { ViewCustomerComponent } from './employee/view-customer/view-customer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TransactComponent } from './customer/transact/transact.component';


const routes: Routes = [
  {path: '',component: WelcomeComponent},
  {path: 'loginCustomer',component: LoginComponent},
  {path: 'loginEmployee',component: LoginComponent},
  {path: 'createCustomer', component: CreateCustomerComponent, canActivate:[AuthGuardService]},
  {path: 'viewCustomer/:id', component:ViewCustomerComponent, canActivate:[AuthGuardService]},
  {path: 'createAccount/:id', component: CreateAccountComponent, canActivate:[AuthGuardService]},
  {path: 'employeedashboard', component: EmployeeComponent, canActivate:[AuthGuardService]},
  {path: 'customerdashboard', component: CustomerComponent, canActivate:[AuthGuardService]},
  {path: 'giveaccount', component: GiveAccountComponent, canActivate:[AuthGuardService]},
  {path: 'givedetails', component: GiveDetailsComponent, canActivate:[AuthGuardService]},
  {path: 'transaction', component: TransactionComponent, canActivate:[AuthGuardService]},
  {path: 'withdraw', component: WithdrawComponent, canActivate:[AuthGuardService]},
  {path: 'transact', component: TransactComponent, canActivate:[AuthGuardService]},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
