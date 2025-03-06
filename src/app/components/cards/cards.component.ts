import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  activeTab: string = 'characters';
  characters: any[] = [];
  filteredCharacters: any[] = [];
  weapons: any[] = [];
  filteredWeapons: any[] = [];
  powers: any[] = [];
  filteredPowers: any[] = [];
  sortCriteria: string = 'rarity-asc';
  selectedFaction: string = '';
  selectedSubtype: string = '';

  factions: string[] = [];
  subtypes: string[] = [];

  rarityOrder = ['Common', 'Rare', 'Epic', 'Legendary', 'Mythic'];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('assets/CharacterCards.json').subscribe((data) => {
      this.characters = data;
      this.filteredCharacters = [...this.characters];
      this.factions = [...new Set(this.characters.map((char) => char.faction))];
      this.subtypes = [...new Set(this.characters.map((char) => char.subtype))];
      this.sortCards();
    });

    this.http.get<any[]>('assets/WeaponCards.json').subscribe((data) => {
      this.weapons = data;
      this.filteredWeapons = [...this.weapons];
      this.sortWeaponCards();
    });

    this.http.get<any[]>('assets/PowerCards.json').subscribe((data) => {
      this.powers = data;
      this.filteredPowers = [...this.powers];
      this.sortPowerCards();
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

  sortWeaponCards() {
    this.filteredWeapons.sort((a, b) => {
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
        case 'damage':
          return b.damage - a.damage;
        case 'weight':
          return a.weight - b.weight;
        default:
          return 0;
      }
    });
  }

  sortPowerCards() {
    this.filteredPowers.sort((a, b) => {
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
        case 'effect':
          return b.effectPower - a.effectPower;
        default:
          return 0;
      }
    });
  }
}
