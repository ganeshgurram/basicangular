import { Component, Input } from '@angular/core';
import { Person } from '../Models/Person.model';
import { UserinfoserviceService } from '../services/userinfoservice.service';

@Component({
  selector: 'app-singleuserinfo',
  templateUrl: './singleuserinfo.component.html',
  styleUrls: ['./singleuserinfo.component.css']
})
export class SingleuserinfoComponent {

  constructor(private userinfos: UserinfoserviceService) { }
  person: Person = {
    firstName: '',
    lastName: '',
    email: '',
    userName: '',
    gender: '',
    password: '',
    dob: '',
  }
  @Input() uname: string="";

  ngOnInit() {
    this.getperson();
  }
  getperson() {
    this.userinfos.getpersoninfo(this.uname).subscribe(r => {
      this.person = r;
    })
  }
 
  //ngOnInit():
}
