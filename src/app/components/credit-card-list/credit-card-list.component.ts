import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CreditCardComponent } from '../credit-card/credit-card.component';
import { creditCard } from '../../interfaces/creditCard.interface';

@Component({
  selector: 'app-credit-card-list',
  standalone: true,
  imports: [NgIf,NgFor,CreditCardComponent],
  templateUrl: './credit-card-list.component.html',
  styleUrl: './credit-card-list.component.css'
})
export class CreditCardListComponent {
  @Input()
  public cards : creditCard[]=[];
}
