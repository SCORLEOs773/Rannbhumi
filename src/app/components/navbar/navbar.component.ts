import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from 'firebase/auth';
import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  user: User | null = null;
  userInitial: string = '';
  mudra: number = 10000; // Default value
  mani: number = 0; // Default value

  constructor(
    private authService: AuthService,
    private router: Router,
    private currencyService: CurrencyService
  ) {}

  ngOnInit() {
    this.authService.getAuthState().subscribe((user) => {
      this.user = user;
      if (user) {
        const username = this.authService.getUsername() ?? '';
        this.userInitial = username.charAt(0).toUpperCase();

        // Load stored values (if available)
        const storedMudra = localStorage.getItem('mudra');
        const storedMani = localStorage.getItem('mani');

        this.mudra = storedMudra ? parseInt(storedMudra) : 10000;
        this.mani = storedMani ? parseInt(storedMani) : 0;
      }
    });

    this.currencyService.mudra$.subscribe((value) => (this.mudra = value));
    this.currencyService.mani$.subscribe((value) => (this.mani = value));
  }

  logout() {
    this.authService.logout().then(() => {
      this.router.navigate(['/']);
    });
  }

  updateStats(mudraChange: number, maniChange: number) {
    this.mudra += mudraChange;
    this.mani += maniChange;

    localStorage.setItem('mudra', this.mudra.toString());
    localStorage.setItem('mani', this.mani.toString());
  }
}
