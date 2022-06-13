import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { NavbarPageComponent } from './layouts/navbar-page/navbar-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ModulesPageComponent } from './pages/modules-page/modules-page.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { ModuleNavbarComponent } from './layouts/module-navbar/module-navbar.component';
import { MuhasibatliqPageComponent } from './pages/muhasibatliq-page/muhasibatliq-page.component';
import { MuhasibatliqContentPageComponent } from './pages/muhasibatliq-page/muhasibatliq-content-page/muhasibatliq-content-page.component';
import { AddFakturaComponent } from './pages/muhasibatliq-page/muhasibatliq-content-page/add-faktura/add-faktura.component';
import { FormsModule } from '@angular/forms';

const appRoute : Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'main', component: MainPageComponent },
  {path: 'muhasibatliq', component: MuhasibatliqPageComponent },
  {path: 'muhasibatliq/avans-faktura', component: MuhasibatliqContentPageComponent },
  {path: 'muhasibatliq/avans-faktura/yeni-faktura', component: AddFakturaComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    NavbarPageComponent,
    MainPageComponent,
    ModulesPageComponent,
    SidebarComponent,
    ModuleNavbarComponent,
    MuhasibatliqPageComponent,
    MuhasibatliqContentPageComponent,
    AddFakturaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
