import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RFormComponent } from './rform/rform.component';
import { SigninupComponent } from './signinup/signinup.component';
import { LoginComponent } from './login/login.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import {SuccessfulComponent } from './successful/successful.component'
const routes: Routes = [
  {
    path: '',redirectTo:'signinup',pathMatch:'full'
  },
  {
    path:'register',component:RFormComponent
  },
  {
    path: 'signinup', component: SigninupComponent
  },
   {
    path: 'login', component: LoginComponent
  },
  {
    path:'userinfo',component:UserinfoComponent
  },
  {
    path: 'successful', component: SuccessfulComponent
  }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
exports:[RouterModule]
})
export class AppRoutingModule { }
