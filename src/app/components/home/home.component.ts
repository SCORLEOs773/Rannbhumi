import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  characters = [
    {
      id: 1,
      name: 'Shri Ram',
      type: 'Character',
      subtype: 'Warrior',
      rarity: 'Legendary',
      attack: 95,
      defense: 90,
      health: 100,
      special_ability: 'Brahmastra Strike - Deals massive damage to any enemy',
      energy_cost: 8,
      faction: 'Ramayana',
      gacha_drop_rate: 0.5,
      description:
        'The prince of Ayodhya, the embodiment of dharma and righteousness.',
      image:
        'https://img.freepik.com/premium-photo/hindu-god-sri-rama-with-bow-arrows-shree-ram-navami-dussehra-celebration-generative-ai_852336-21373.jpg',
    },
    {
      id: 2,
      name: 'Hanuman',
      type: 'Character',
      subtype: 'Divine Warrior',
      rarity: 'Legendary',
      attack: 90,
      defense: 95,
      health: 120,
      special_ability: 'Sanjeevani - Restores health to a chosen ally',
      energy_cost: 7,
      faction: 'Ramayana',
      gacha_drop_rate: 0.7,
      description:
        'The mighty devotee of Lord Ram, known for his strength and devotion.',
      image:
        'https://w0.peakpx.com/wallpaper/6/739/HD-wallpaper-the-monkey-king-ii-warrior-magic-fantasy-eastern.jpg',
    },
    {
      id: 3,
      name: 'Krishna',
      type: 'Character',
      subtype: 'God',
      rarity: 'Legendary',
      attack: 85,
      defense: 85,
      health: 110,
      special_ability: 'Sudharshan Chakra - Bypasses enemy defenses',
      energy_cost: 9,
      faction: 'Mahabharata',
      gacha_drop_rate: 0.6,
      description:
        'The divine strategist and guide of the Pandavas, master of dharma.',
      image:
        'https://img.freepik.com/free-photo/painting-representing-krishna_23-2151073075.jpg',
    },
  ];
}
