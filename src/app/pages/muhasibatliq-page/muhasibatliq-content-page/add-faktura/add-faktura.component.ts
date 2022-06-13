import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-faktura',
  templateUrl: './add-faktura.component.html',
  styleUrls: ['./add-faktura.component.css']
})
export class AddFakturaComponent implements OnInit {

  amount: number = 19;
  mezmun: string = '';
  mebleg: string = '';
  // inputsArray = new FormArray([new FormControl('', Validators.required)]);

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSave() {
    console.log(this.mezmun + " " + this.mebleg);
  }

  onHandleAddContext() {
  }

  onHandleGoBack() {
    this.router.navigate(['/muhasibatliq/avans-faktura'])
  }

}
