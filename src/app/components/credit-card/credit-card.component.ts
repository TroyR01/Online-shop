import { Component, Input } from '@angular/core';
import { creditCard } from '../../interfaces/creditCard.interface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-credit-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './credit-card.component.html',
  styleUrl: './credit-card.component.css'
})
export class CreditCardComponent {
  @Input()
  public creditCard :creditCard = {
    num_tarjeta: "0",
    cvv: "123",
    date: "01/30",
    nombre: "Default",
    isSelected: false
  }
  public onSelect() : void {
    console.log("Selected");
    this.creditCard.isSelected = !this.creditCard.isSelected;
    console.log(this.creditCard.isSelected);
  }
}
