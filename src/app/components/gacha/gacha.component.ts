import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Card {
  id: number;
  name: string;
  rarity: string;
  gacha_drop_rate: number;
  image: string;
}

@Component({
  selector: 'app-gacha',
  templateUrl: './gacha.component.html',
  styleUrls: ['./gacha.component.css'],
})
export class GachaComponent implements OnInit {
  characters: Card[] = [];
  weapons: Card[] = [];
  powers: Card[] = [];

  pulledCards: Card[] = [];
  cardRows: Card[][] = [];
  showModal = false;
  showClaimButton = false;
  gachaType: 'character' | 'weapon' | 'power' = 'character';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<Card[]>('assets/CharacterCards.json')
      .subscribe((data) => (this.characters = data));
    this.http
      .get<Card[]>('assets/WeaponCards.json')
      .subscribe((data) => (this.weapons = data));
    this.http
      .get<Card[]>('assets/PowerCards.json')
      .subscribe((data) => (this.powers = data));
  }

  // 🎭 Pull Character
  pullCharacter(count: number) {
    this.gachaType = 'character';
    this.pulledCards = this.pullMultipleCards(this.characters, count);
    this.showPulledCards();
  }

  // ⚔️ Pull Weapon
  pullWeapon(count: number) {
    this.gachaType = 'weapon';
    this.pulledCards = this.pullMultipleCards(this.weapons, count);
    this.showPulledCards();
  }

  // 🔱 Pull Power
  pullPower(count: number) {
    this.gachaType = 'power';
    this.pulledCards = this.pullMultipleCards(this.powers, count);
    this.showPulledCards();
  }

  // 🧮 Pull multiple cards
  pullMultipleCards(cards: Card[], count: number): Card[] {
    const pulled: Card[] = [];
    for (let i = 0; i < count; i++) {
      const card = this.pullRandomCard(cards);
      if (card) pulled.push(card);
    }
    return pulled;
  }

  // 🎲 Weighted Random Selection
  pullRandomCard(cards: Card[]): Card | null {
    if (cards.length === 0) return null;

    const totalWeight = cards.reduce(
      (sum, card) => sum + card.gacha_drop_rate,
      0
    );
    let randomNum = Math.random() * totalWeight;

    for (let card of cards) {
      if (randomNum < card.gacha_drop_rate) return card;
      randomNum -= card.gacha_drop_rate;
    }
    return null;
  }

  // 🎇 Show Pulled Cards in Rows
  showPulledCards() {
    this.showModal = true;
    this.showClaimButton = false;
    this.cardRows = [];

    // Split pulled cards into rows of 5
    for (let i = 0; i < this.pulledCards.length; i += 5) {
      this.cardRows.push(this.pulledCards.slice(i, i + 5));
    }

    let totalDelay = this.pulledCards.length; // Total delay time
    setTimeout(() => {
      this.showClaimButton = true;
    }, totalDelay * 1000); // Claim button appears after all cards are revealed
  }

  // ❌ Close Modal
  closeModal() {
    this.showModal = false;
    this.cardRows = [];
  }
}
