import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authenticate/auth.service';
@Component({
  selector: 'app-give-account',
  templateUrl: './give-account.component.html',
  styleUrls: ['./give-account.component.css']
})
export class GiveAccountComponent implements OnInit {

  depositmsg: string;
  servicemsg: string;
  deletemsg: string;
  viewCustomer: string;
  Accounterror: string;

  constructor(private empService: EmpService,
    private router: Router,
    private authService:AuthService) { }

  ngOnInit() {
  }
  createAccount(id){
    let val=id.value;
    console.log(id);
    this.empService.getDetails(val).subscribe((out)=>{
      this.router.navigate(['/createAccount',val]);
    },error=>{
      this.Accounterror="Invalid CustomerID";
      id.resetForm();
    })
  }
}
