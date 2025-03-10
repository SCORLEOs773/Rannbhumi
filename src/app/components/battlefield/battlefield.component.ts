import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-battlefield',
  templateUrl: './battlefield.component.html',
  styleUrls: ['./battlefield.component.scss'],
})
export class BattlefieldComponent implements OnInit {
  timer = 60;
  playerCards = ['🔥', '⚡', '🛡️']; // Dummy cards
  opponentCards = [1, 2, 3, 4]; // Represent back of cards
  boardSlots = [null, null, null]; // Slots for placed cards

  constructor(private router: Router) {}

  ngOnInit() {
    this.startTimer();
  }

  // Navigate back to home
  goBack() {
    this.router.navigate(['/selection-screen']);
  }

  // Start game timer
  startTimer() {
    const interval = setInterval(() => {
      if (this.timer > 0) {
        this.timer--;
      } else {
        clearInterval(interval);
      }
    }, 1000);
  }

  // Draw a card from the deck
  drawCard() {
    this.playerCards.push('🔥'); // Dummy card
  }
}
