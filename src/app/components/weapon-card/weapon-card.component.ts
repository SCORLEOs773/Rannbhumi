import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weapon-card',
  templateUrl: './weapon-card.component.html',
  styleUrls: ['./weapon-card.component.css'],
})
export class WeaponCardComponent {
  @Input() weapon: any;

  getRarityClass(rarity: string): string {
    return rarity.toLowerCase();
  }
}
