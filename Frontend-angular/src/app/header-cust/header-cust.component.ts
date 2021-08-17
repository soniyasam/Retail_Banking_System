import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../authenticate/auth.service';

@Component({
  selector: 'app-header-cust',
  templateUrl: './header-cust.component.html',
  styleUrls: ['./header-cust.component.css']
})
export class HeaderCustComponent implements OnInit {
  href: any;
  val: boolean=false;

  constructor(private authService:AuthService,
    private router: Router) { }

  ngOnInit() {
    this.href= this.router.url;
    if(this.href=='/customerdashboard'){
      this.val=true;
    }
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
