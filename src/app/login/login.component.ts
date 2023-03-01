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
  person: Person = {
    firstname: '',
    lastname: '',
    email: '',
    username: 'dfgh',
    gender: '',
    password: '',
    dob: '',
  }

  Password :any;
  UserName :any;
  checkstatus: boolean =false;
  public username: any;
  public password: any;
  public person1: any;
  constructor(private userinfos: UserinfoserviceService) { }
  logger(login: NgForm) {
    this.username = login.controls['UserName'].value;
    this.password = login.controls['Password'].value;
    console.log("Hi");
   
   
    this.userinfos.getpersoninfo(this.username).subscribe(r => {
      this.person.username = r.username;
      console.log(typeof r);
      if ((this.username == r.username) && (this.password == r.password)) {
        this.checkstatus = true;
      }
    });

   
  }
}
