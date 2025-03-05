import { Component } from '@angular/core';

@Component({
  selector: 'app-how-to-play',
  templateUrl: './how-to-play.component.html',
  styleUrls: ['./how-to-play.component.scss'],
})
export class HowToPlayComponent {
  currentStep: number | null = 0; // Start at first step

  steps = [
    {
      title: 'Choose Warriors',
      description:
        'Select your best warriors based on their strengths and weaknesses. Each warrior belongs to a unique class (Tank, Fighter, Assassin, Support, or Mage) and has distinct abilities. Consider their synergy with teammates and the enemy’s lineup before making your selection. Rarer warriors possess stronger skills but require more resources to summon and upgrade.',
    },
    {
      title: 'Deploy Team',
      description:
        'Position your warriors strategically on the battlefield to maximize their effectiveness. Tanks should be in the frontline absorbing damage, while Assassins and Mages deal damage from a safe position. Your placement will determine how effectively your team executes their attacks and withstands enemy assaults. Experiment with formations to counter different playstyles.',
    },
    {
      title: 'Strategize & Attack',
      description:
        'Analyze your opponent’s formation, identify their weaknesses, and plan your attacks accordingly. Use combo moves, chain attacks, and ultimate abilities to exploit enemy vulnerabilities. Timing is crucial—launching a well-timed counterattack or disrupting enemy combos can turn the tide of battle. Always adapt your strategy based on the flow of combat.',
    },
    {
      title: 'Use Special Abilities',
      description:
        'Every warrior has a unique set of abilities, including passive skills, power moves, and ultimate attacks. Master their cooldowns and activation timings for maximum impact. Some abilities provide buffs to allies, while others deal devastating damage to enemies. Properly chaining your warriors’ abilities can create powerful combos that can overwhelm even stronger opponents.',
    },
    {
      title: 'Win the Battle!',
      description:
        'Defeat all enemy warriors and claim your well-earned rewards! Victories grant valuable loot, including gold, experience points, and rare items. Use your winnings to upgrade warriors, unlock new abilities, and enhance your overall battle strategy. Climbing the leaderboard and facing tougher challengers will push your strategic skills to their limits!',
    },
  ];

  selectStep(index: number) {
    this.currentStep = index;
  }
}
