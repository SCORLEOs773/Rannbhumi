import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { HowToPlayComponent } from './components/how-to-play/how-to-play.component';
import { CardsComponent } from './components/cards/cards.component';
import { GachaComponent } from './components/gacha/gacha.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'how-to-play', component: HowToPlayComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'gacha', component: GachaComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
