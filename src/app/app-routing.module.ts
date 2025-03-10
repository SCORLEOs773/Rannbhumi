import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { HowToPlayComponent } from './components/how-to-play/how-to-play.component';
import { CardsComponent } from './components/cards/cards.component';
import { GachaComponent } from './components/gacha/gacha.component';
import { LoginComponent } from './components/login/login.component';
import { ShopComponent } from './components/shop/shop.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'how-to-play', component: HowToPlayComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'gacha', component: GachaComponent },
  { path: 'shop', component: ShopComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
