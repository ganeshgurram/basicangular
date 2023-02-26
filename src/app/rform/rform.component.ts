import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.css']
})
export class RFormComponent {
  constructor(private router: Router ) { }
  newregister() {
   // console.log("Form submitted", register);
    this.router.navigate(['/login']);
 
  }
}
