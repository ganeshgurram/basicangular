import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Person } from '../Models/Person.model';
import { AuthService } from '../services/auth.service';
import { UserinfoserviceService } from '../services/userinfoservice.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  constructor(private userinfos: UserinfoserviceService,private authservice:AuthService) { }
  public status: boolean = false;
  public persons: Person[]=[];
  ngOnInit(): void {
    this.getallperson();
  }
  public name: string="";
  p: any;
  getallperson() {
    this.userinfos.getallpersonsinfo().subscribe(
      response => {
        this.persons = response;
       // console.log(response);
        console.log(this.persons);
    });
  }
  deleteperson(uname:string) {
    this.userinfos.deleteperson(uname).subscribe(
      r => {
        this.getallperson();
      });
  }

}
