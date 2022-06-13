import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-muhasibatliq-content-page',
  templateUrl: './muhasibatliq-content-page.component.html',
  styleUrls: ['./muhasibatliq-content-page.component.css']
})
export class MuhasibatliqContentPageComponent implements OnInit {

  hesabFaktura: string = "Hesab faktura";
  mezmun: string = "Kocurme";
  mebleg: string = "1000";

  
  onLoadAddFaktura(){
    this.router.navigate(['/muhasibatliq/avans-faktura/yeni-faktura']);
    // this.fakturas.push(this.avnsFkdra);
  }

  fakturas = [
    {faktura: 'fkdra1', mezmun: 'mezmun1', mebleg: 'mebleg1'}
  ]

  @Input() avnsFkdra : any ={}
  constructor(private router: Router) { }

  ngOnInit(): void {
   
  }

}
