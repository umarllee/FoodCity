import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-muhasibatliq-page',
  templateUrl: './muhasibatliq-page.component.html',
  styleUrls: ['./muhasibatliq-page.component.css']
})
export class MuhasibatliqPageComponent implements OnInit {

  logoUrl : string = "/assets/imgs/favicon.png";
  fakturas={faktura: 'Avans1', mezmun: 'Pul kocurme', mebleg:'1500'};

  constructor() { }

  ngOnInit(): void {
  }

}
