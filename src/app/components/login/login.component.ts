import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  async onLogin() {
    try {
      await this.authService.login(this.email, this.password);
      alert('Login successful!');
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 500); // ⏳ Delay added for smoother transition
    } catch (error: any) {
      this.errorMessage = error.message;
      this.router.navigate(['/']);
    }
  }
}
