import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private mudraSubject = new BehaviorSubject<number>(10000);
  private maniSubject = new BehaviorSubject<number>(10);

  mudra$ = this.mudraSubject.asObservable();
  mani$ = this.maniSubject.asObservable();

  updateCurrency(type: 'mudra' | 'mani', amount: number) {
    if (type === 'mudra') {
      const newMudra = Math.max(0, this.mudraSubject.value + amount);
      this.mudraSubject.next(newMudra); // Emit new value
    } else {
      const newMani = Math.max(0, this.maniSubject.value + amount);
      this.maniSubject.next(newMani); // Emit new value
    }
  }

  getMudras(): Observable<number> {
    return this.mudra$; // Return observable instead of direct value
  }

  getManis(): Observable<number> {
    return this.mani$; // Return observable instead of direct value
  }
}
