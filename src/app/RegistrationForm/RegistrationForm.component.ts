import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Person } from '../Models/Person.model';
import { UserinfoserviceService } from '../services/userinfoservice.service';
import { UserinfoComponent } from '../userinfo/userinfo.component';
@Component({
  selector: 'app-RegistrationForm',
  templateUrl: './RegistrationForm.component.html',
  styleUrls: ['./RegistrationForm.component.css']
})
export class RegistrationFormComponent {

  UserName: any;
  Dob: any;
  Email: any;
  FirstName: any;
  LastName: any;
  Gender: any;
  Password: any;

  check: boolean = false;

  person :Person={
  firstname: '',
  lastname: '',
  email: '',
  username: '',
  gender: '',
  password:'',
  dob: '',
}
  constructor(private userinfos: UserinfoserviceService) { }
  newregister(register: NgForm): void {
    this.person.username = register.controls['UserName'].value;
    this.person.dob = register.controls['Dob'].value;
    this.person.email = register.controls['Email'].value;
    this.person.firstname = register.controls['FirstName'].value;
    this.person.lastname = register.controls['LastName'].value;
    this.person.gender = register.controls['Gender'].value;
    this.person.password = register.controls['Password'].value;
    this.userinfos.addperson(this.person).subscribe();
    register.resetForm();
    this.check = true;
                                                                                                                                                                                                                                               
  }
  public dropdownvalue = "";
  gendervalue(drpvalue: any) {
    this.dropdownvalue = drpvalue.target.value;
  }
}
