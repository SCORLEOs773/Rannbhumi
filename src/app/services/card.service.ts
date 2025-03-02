import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private jsonUrl = '/assets/CharacterCards.json';

  constructor(private http: HttpClient) {}

  getCharacterCards(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }
}
