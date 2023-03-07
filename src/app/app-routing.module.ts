import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RegistrationFormComponent } from './RegistrationForm/RegistrationForm.component';
import { SigninupComponent } from './signinup/signinup.component';
import { LoginComponent } from './login/login.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import {SuccessfulComponent } from './successful/successful.component'
import { EditpersonComponent } from './editperson/editperson.component';
const routes: Routes = [
  {
    path: '',redirectTo:'signinup',pathMatch:'full'
  },
  {
    path:'register',component:RegistrationFormComponent
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
  },
  {
    path:'editperson/:username',component:EditpersonComponent
  },

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
