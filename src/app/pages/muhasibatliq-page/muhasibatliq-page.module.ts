import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MuhasibatliqContentPageComponent } from './muhasibatliq-content-page/muhasibatliq-content-page.component';
// import { AddFakturaComponent } from './pages/muhasibatliq-page/add-faktura/add-faktura.component';
import { FormsModule } from '@angular/forms';

const appRoute : Routes = [
  {path: 'muhasibatliq/avans-faktura', component: MuhasibatliqContentPageComponent },
//   {path: 'muhasibatliq/avans-faktura/yeni-faktura', component: AddFakturaComponent },
]

@NgModule({
  declarations: [
    MuhasibatliqContentPageComponent,
    // AddFakturaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [], 
  bootstrap: [MuhasibatliqContentPageComponent]
})
export class AppModule { }
