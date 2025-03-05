import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GachaComponent } from './components/gacha/gacha.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HowToPlayComponent } from './components/how-to-play/how-to-play.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CardsComponent } from './components/cards/cards.component';
import { WeaponCardComponent } from './components/weapon-card/weapon-card.component';

@NgModule({
  declarations: [
    AppComponent,
    GachaComponent,
    CharacterCardComponent,
    HomeComponent,
    NavbarComponent,
    SignupComponent,
    HowToPlayComponent,
    CardsComponent,
    WeaponCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatExpansionModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
