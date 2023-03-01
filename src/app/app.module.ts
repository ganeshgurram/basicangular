import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './RegistrationForm/RegistrationForm.component';
import { AppRoutingModule } from './app-routing.module';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { LoginComponent } from './login/login.component';
import { SigninupComponent } from './signinup/signinup.component';
import { SuccessfulComponent } from './successful/successful.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    UserinfoComponent,
    LoginComponent,
    SigninupComponent,
    SuccessfulComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
