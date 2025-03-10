import { Component } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent {
  mudraOffers = [
    { amount: 5000, price: 50 },
    { amount: 10000, price: 90 },
    { amount: 20000, price: 160 },
  ];

  maniOffers = [
    { amount: 5, price: 30 },
    { amount: 10, price: 55 },
    { amount: 20, price: 100 },
  ];

  cardOffers = [
    { name: 'Starter Pack', priceMudra: 2000, priceMani: 2 },
    { name: 'Epic Warrior Pack', priceMudra: 5000, priceMani: 5 },
    { name: 'Legendary God Pack', priceMudra: 10000, priceMani: 10 },
  ];

  showModal = false;
  selectedOffer: any = null;
  selectedType: 'mudra' | 'mani' | 'card' | null = null;
  mudras: number = 0;
  manis: number = 0;
  private subscriptions: Subscription = new Subscription();

  constructor(private currencyService: CurrencyService) {
    this.subscriptions.add(
      this.currencyService.getMudras().subscribe((mudra) => {
        this.mudras = mudra; // Always keeps the latest mudra value
      })
    );

    this.subscriptions.add(
      this.currencyService.getManis().subscribe((mani) => {
        this.manis = mani; // Always keeps the latest mani value
      })
    );
  }

  openPurchaseModal(offer: any, type: 'mudra' | 'mani' | 'card') {
    this.selectedOffer = offer;
    this.selectedType = type;
    this.showModal = true;
  }

  confirmPurchase() {
    if (this.selectedOffer && this.selectedType) {
      if (this.selectedType === 'mudra' || this.selectedType === 'mani') {
        this.currencyService.updateCurrency(
          this.selectedType,
          this.selectedOffer.amount
        );
      } else if (this.selectedType === 'card') {
        const { priceMudra, priceMani } = this.selectedOffer;
        if (this.mudras >= priceMudra && this.manis >= priceMani) {
          this.currencyService.updateCurrency('mudra', -priceMudra);
          this.currencyService.updateCurrency('mani', -priceMani);
        } else {
          alert('Not enough Mudras or Manis');
        }
      }
    }
    this.closeModal();
  }

  closeModal() {
    this.showModal = false;
    this.selectedOffer = null;
    this.selectedType = null;
  }

  buyCardOffer(offer: any) {
    this.openPurchaseModal(offer, 'card');
  }
}
