import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  characters: any[] = [];
  filteredCharacters: any[] = [];
  sortCriteria: string = 'rarity-asc';
  selectedFaction: string = '';
  selectedSubtype: string = '';

  factions: string[] = [];
  subtypes: string[] = [];

  rarityOrder = ['Common', 'Rare', 'Epic', 'Mythic', 'Legendary'];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('assets/CharacterCards.json').subscribe((data) => {
      this.characters = data;
      this.filteredCharacters = [...this.characters];

      // Extract unique factions and subtypes
      this.factions = [...new Set(this.characters.map((char) => char.faction))];
      this.subtypes = [...new Set(this.characters.map((char) => char.subtype))];

      this.sortCards(); // Sort initially
    });
  }

  sortCards() {
    this.filteredCharacters.sort((a, b) => {
      switch (this.sortCriteria) {
        case 'rarity-desc':
          return (
            this.rarityOrder.indexOf(b.rarity) -
            this.rarityOrder.indexOf(a.rarity)
          );
        case 'rarity-asc':
          return (
            this.rarityOrder.indexOf(a.rarity) -
            this.rarityOrder.indexOf(b.rarity)
          );
        case 'attack':
          return b.attack - a.attack;
        case 'defense':
          return b.defense - a.defense;
        case 'health':
          return b.health - a.health;
        default:
          return 0;
      }
    });
  }

  filterCards() {
    this.filteredCharacters = this.characters.filter((char) => {
      return (
        (this.selectedFaction ? char.faction === this.selectedFaction : true) &&
        (this.selectedSubtype ? char.subtype === this.selectedSubtype : true)
      );
    });
    this.sortCards();
  }
}
