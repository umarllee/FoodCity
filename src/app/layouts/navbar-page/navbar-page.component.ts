import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-page',
  templateUrl: './navbar-page.component.html',
  styleUrls: ['./navbar-page.component.css']
})
export class NavbarPageComponent implements OnInit {

  logoUrl: string = "/assets/imgs/favicon.png";
  constructor() { }

  ngOnInit(): void {
  }

}
