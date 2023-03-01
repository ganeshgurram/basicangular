import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-RegistrationForm',
  templateUrl: './RegistrationForm.component.html',
  styleUrls: ['./RegistrationForm.component.css']
})
export class RegistrationFormComponent {
  constructor(private router: Router ) { }
  newregister() {
   // console.log("Form submitted", register);
    this.router.navigate(['/login']);
 
  }
  public dropdownvalue = "";
  gendervalue(drpvalue: any) {
    this.dropdownvalue = drpvalue.target.value;
  }
}
