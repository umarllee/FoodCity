import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

   logoUrl : string = "/assets/imgs/favicon.png";

  constructor() { }

  ngOnInit(): void {
  }

}
