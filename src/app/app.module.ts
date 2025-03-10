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
import { PowerCardComponent } from './components/power-card/power-card.component';
import { LoginComponent } from './components/login/login.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { ShopComponent } from './components/shop/shop.component';
import { BattlefieldComponent } from './components/battlefield/battlefield.component';
import { SelectionScreenComponent } from './components/selection-screen/selection-screen.component';

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
    PowerCardComponent,
    LoginComponent,
    ShopComponent,
    BattlefieldComponent,
    SelectionScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatExpansionModule,
    MatCardModule,
    MatButtonModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
