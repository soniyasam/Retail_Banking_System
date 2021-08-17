import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authenticate/auth.service';
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  depositmsg: string;
  servicemsg: string;
  deletemsg: string;
  viewCustomer: string;
  Accounterror: string;
  constructor(private empService: EmpService,
    private router: Router,
    private authService:AuthService) { }
    onServiceCharge(){
      this.empService.onServiceCharge().subscribe((val)=>{
        console.log(val);
        this.servicemsg="Service Charge Deducted";
      },error=>{
        this.servicemsg="Error in Service Charge Deduction";
        console.log(error);
      })
    }

    onDeposit(f){
      this.empService.onDeposit(f.value)
      .subscribe((val)=>{
        console.log(val);
        this.depositmsg="Deposit Successfully Done..";
        f.resetForm();
      },error=>{
        this.depositmsg="Invalid Account Id..";
      })
    }
  ngOnInit() {
  }

}
