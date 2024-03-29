import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgClass, NgIf } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIf,NgClass],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginPage {

  isSignup: boolean = true;

  toggleForm() {
    this.isSignup = !this.isSignup;
  }
}
