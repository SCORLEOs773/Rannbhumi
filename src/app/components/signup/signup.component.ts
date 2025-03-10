import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  async onSignup() {
    try {
      await this.authService.signup(this.email, this.password, this.username);
      alert('Signup successful! Redirecting...');
      await this.authService.signup(this.email, this.password, this.username);
      this.router.navigate(['/']);
    } catch (error: any) {
      this.errorMessage = error.message;
    }
  }
}
