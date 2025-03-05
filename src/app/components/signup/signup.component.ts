import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSignup() {
    // TODO: Implement actual signup logic (Firebase/Auth API)
    alert('Signup successful! Redirecting to login page...');
    this.router.navigate(['/login']);
  }
}
