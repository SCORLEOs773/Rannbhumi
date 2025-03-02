import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Character {
  id: number;
  name: string;
  type: string;
  subtype: string;
  rarity: string;
  attack: number;
  defense: number;
  health: number;
  special_ability: string;
  energy_cost: number;
  faction: string;
  gacha_drop_rate: number;
  description: string;
  image: string;
}

@Component({
  selector: 'app-gacha',
  templateUrl: './gacha.component.html',
  styleUrls: ['./gacha.component.css'],
})
export class GachaComponent implements OnInit {
  characters: Character[] = [];
  pulledCharacter: Character | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<Character[]>('assets/CharacterCards.json')
      .subscribe((data) => {
        this.characters = data;
      });
  }

  pullCharacter() {
    if (this.characters.length === 0) return;

    // 🎲 Weight-based random selection using `gacha_drop_rate`
    const totalWeight = this.characters.reduce(
      (sum, char) => sum + char.gacha_drop_rate,
      0
    );
    let randomNum = Math.random() * totalWeight;

    for (let char of this.characters) {
      if (randomNum < char.gacha_drop_rate) {
        this.pulledCharacter = char;
        return;
      }
      randomNum -= char.gacha_drop_rate;
    }
  }
}
