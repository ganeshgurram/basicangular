import { Component, OnInit } from '@angular/core';
import { Person } from '../Models/Person.model';
import { UserinfoserviceService } from '../services/userinfoservice.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  constructor(private userinfos: UserinfoserviceService) { }

 persons: Person[] = [];
  ngOnInit(): void {
    this.getallperson();
  }

  getallperson() {
    this.userinfos.getallpersonsinfo().subscribe(
      response => {
        this.persons = response;
      
    });
  }
}
