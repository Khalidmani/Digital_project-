import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { OurservicesComponent } from './Pages/ourservices/ourservices.component';
import { GuidelinesComponent } from './Pages/guidelines/guidelines.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AccountResgitstrationComponent } from './Pages/account-resgitstration/account-resgitstration.component';

const routes: Routes = [{
  path:'',component:MainLayoutComponent,children:[
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'ourservices',component:OurservicesComponent},
    {path:'guidelines',component:GuidelinesComponent},
    {path:'registration',component:RegistrationComponent},
    {path:'login',component:LoginComponent},
    {path:'accountresgitstration',component:AccountResgitstrationComponent}
  ]}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
