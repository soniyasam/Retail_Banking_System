import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authenticate/auth.service';
@Component({
  selector: 'app-give-details',
  templateUrl: './give-details.component.html',
  styleUrls: ['./give-details.component.css']
})
export class GiveDetailsComponent implements OnInit {
  depositmsg: string;
  servicemsg: string;
  deletemsg: string;
  viewCustomer: string;
  Accounterror: string;

  constructor(private empService: EmpService,
    private router: Router,
    private authService:AuthService) { }

  onDisplay(id){
    let val=id.value;
    this.empService.viewCustomer(val).subscribe((out)=>{
      console.log(out);
      this.router.navigate(['/viewCustomer',val]);
    },error=>{
      this.viewCustomer="Customer UserId DOES NOT EXISTS";
    })

  }
  ngOnInit() {
  }

}
