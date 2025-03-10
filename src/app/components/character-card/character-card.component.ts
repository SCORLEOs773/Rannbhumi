import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css'],
})
export class CharacterCardComponent {
  @Input() character: any;

  getRarityClass(rarity: string): string {
    return rarity.toLowerCase();
  }
}
