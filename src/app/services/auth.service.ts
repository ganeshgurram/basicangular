import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login = false;
  isLoggedIn() {
    
    this.login = true;
  //  console.log(this.login);
  }
  isLogout() {
    this.login = false;
  }
  isAuthenticated() {
    console.log(this.login);
    return this.login
  }
}
