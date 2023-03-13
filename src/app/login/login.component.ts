import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Person } from '../Models/Person.model';
import { AuthService } from '../services/auth.service';
import { UserinfoserviceService } from '../services/userinfoservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  Password: any;
  UserName: any;

  public username: any;
  public password: any;
  public password2: any;
  public checkstatus: boolean = false;
  public sd: boolean=false;
  public stat:string="";
  constructor(private userinfos: UserinfoserviceService, private router: Router, private authservice: AuthService) { }


  logger(login: NgForm) {
    this.username = login.controls['UserName'].value;
    this.password = login.controls['Password'].value;
    console.log("Hi");


    this.userinfos.getpersoninfo(this.username).subscribe(r => {
      this.password2 = r['password'];
      if (this.password2 === this.password) {

        this.checkstatus = true;
        console.warn(r);
        this.authservice.isLoggedIn();
        console.log(this.authservice.login);

      }
      else {
        this.stat = "Invalid User";
      }
    });
   
  }
 
  
}
