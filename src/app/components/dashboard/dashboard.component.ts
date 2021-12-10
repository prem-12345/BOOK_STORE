import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authguardService/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private router:Router) { }

  ngOnInit(): void {
  }
  logOut(){
    this.authenticationService.logOut();
  }

  onCart(){
    this.router.navigateByUrl('/dashboard/my-cart');
  }
}
