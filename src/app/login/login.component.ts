import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Person } from '../Models/Person.model';
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
  public checkstatus :boolean = false;
  constructor(private userinfos: UserinfoserviceService, private router: Router) { }
  logger(login: NgForm) {
    this.username = login.controls['UserName'].value;
    this.password = login.controls['Password'].value;
    console.log("Hi");


    this.userinfos.getpersoninfo(this.username).subscribe(r => {
      this.password2 = r['password'];
      if (this.password2 === this.password) {
       // this.checkstatus = true;
     //   this.router.navigate(['/successful']);
        this.checkstatus = true;

      }
    });
   
  }
}
