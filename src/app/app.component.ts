
import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basicangular';
  constructor(private authservice: AuthService) { }
  public login = false;
  logout() {  
    console.log(this.authservice.login);
    this.authservice.isLogout();
    console.log(this.authservice.login);
  }
}
