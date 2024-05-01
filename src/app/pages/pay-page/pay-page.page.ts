import { Component } from '@angular/core';
import { creditCard } from '../../interfaces/creditCard.interface';
import { CreditCardServices } from '../../services/creditCards.services';
import { CreditCardListComponent } from '../../components/credit-card-list/credit-card-list.component';

@Component({
  selector: 'app-pay-page',
  standalone: true,
  imports: [CreditCardListComponent],
  templateUrl: './pay-page.page.html',
  styleUrl: './pay-page.page.css'
})
export class PayPage {
  constructor(private creditService:CreditCardServices){

  }
  public get cards():creditCard[]{
    return this.creditService.creditCardList;
  }
}
