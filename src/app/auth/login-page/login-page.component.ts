import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  logoUrl: string = "/assets/imgs/logoFood.png";
  constructor( private router: Router) { } 

  onLoadMain () {
    this.router.navigate(['/main']);
  }

  ngOnInit(): void {
  }

}
