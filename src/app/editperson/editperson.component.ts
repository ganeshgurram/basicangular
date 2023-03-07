import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../Models/Person.model';
import { UserinfoserviceService } from '../services/userinfoservice.service';

@Component({
  selector: 'app-editperson',
  templateUrl: './editperson.component.html',
  styleUrls: ['./editperson.component.css']
})
export class EditpersonComponent {

  constructor(private route: ActivatedRoute, private userinfos: UserinfoserviceService) { }

  uname: string = ""; 



  check: boolean = false;

  person: Person = {
    firstName: '',
    lastName: '',
    email: '',
    userName: '',
    gender: '',
    password: '',
    dob: '',
  }
  newedit(): void {
    this.editperson();
   
   
  }
  public dropdownvalue = "";
  gendervalue(drpvalue: any) {
    this.dropdownvalue = drpvalue.target.value;
  }
  ngOnInit() {
   // this.getperson();
    this.uname = this.route.snapshot.params['username'];
    this.userinfos.getpersoninfo(this.uname).subscribe(
      r => {
        this.person = r;
        console.log(this.person);
       
      }
    );
   
    
  }
  editperson() {
    this.userinfos.editperson(this.person).subscribe(r => {
      this.person = r;
      this.check = true;
     
    });
  }
}
