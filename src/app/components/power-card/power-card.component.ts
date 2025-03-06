import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-power-card',
  templateUrl: './power-card.component.html',
  styleUrls: ['./power-card.component.css'],
})
export class PowerCardComponent {
  @Input() power: any;

  getRarityClass(rarity: string): string {
    switch (rarity.toLowerCase()) {
      case 'legendary':
        return 'legendary';
      case 'mythic':
        return 'mythic';
      case 'epic':
        return 'epic';
      case 'rare':
        return 'rare';
      case 'common':
        return 'common';
      default:
        return 'common';
    }
  }
}
