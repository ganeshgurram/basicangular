import { Component } from '@angular/core';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent {
  users: any[]= [
    {
      firstname: 'Ganesh', lastname: 'Gurram', dob: '05/25/2001', email: 'ganeshgurram000@gmail.com', password: 'GAnesh@123'
    }
  ];
}
