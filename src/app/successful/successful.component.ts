import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-successful',
  templateUrl: './successful.component.html',
  styleUrls: ['./successful.component.css']
})
export class SuccessfulComponent {
  constructor(private router: Router) { }
  showusers() {
    // console.log("Form submitted", register);
    this.router.navigate(['/userinfo']);

  }
}
