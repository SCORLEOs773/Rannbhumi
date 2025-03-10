import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  showNavbar = true;
  title = 'rannbhumi';

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.showNavbar = this.router.url !== '/battlefield';
    });
  }
}
