import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modules-page',
  templateUrl: './modules-page.component.html',
  styleUrls: ['./modules-page.component.css']
})
export class ModulesPageComponent implements OnInit {

  constructor( private router : Router) { }

  ngOnInit(): void {
  }

  onLoadMuhasibatliq(){
    this.router.navigate(['/muhasibatliq'])
  }

}
