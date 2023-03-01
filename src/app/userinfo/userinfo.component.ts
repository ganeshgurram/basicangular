import { Component, OnInit } from '@angular/core';
import { Person } from '../Models/Person.model';
import { UserinfoserviceService } from '../services/userinfoservice.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit{
  constructor(private userinfos: UserinfoserviceService) { }

  
    ngOnInit():void {
     this.getperson();
    }

getperson() { 
  this.userinfos.getallpersonsinfo().subscribe(
    r => {
      console.log(r);
    }
  );
}
}
