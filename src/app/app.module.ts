import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GachaComponent } from './components/gacha/gacha.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';

@NgModule({
  declarations: [AppComponent, GachaComponent, CharacterCardComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
