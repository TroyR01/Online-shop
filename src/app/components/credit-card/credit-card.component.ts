import { Component, Input } from '@angular/core';
import { creditCard } from '../../interfaces/creditCard.interface';
import { NgClass } from '@angular/common';
import { CreditCardServices } from '../../services/creditCards.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credit-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './credit-card.component.html',
  styleUrl: './credit-card.component.css'
})
export class CreditCardComponent {
  constructor(private creditService:CreditCardServices,private router:Router){
  }
  @Input()
  public creditCard :creditCard = {
    num_tarjeta: "0",
    cvv: "123",
    date: "01/30",
    nombre: "Default",
    isSelected: false,
    id_user:0
  }
  public onSelect() : void {
    console.log("Selected");
    this.creditCard.isSelected = !this.creditCard.isSelected;
    console.log(this.creditCard.isSelected);
  }

  public deleteCreditCard(num_tar:string):void{
    const id = localStorage.getItem("id_user")??"";
    const id_user = parseInt(id,10);
    this.creditService.deleteCreditCard(num_tar,id_user);
    this.router.navigate(['/pay']);;
  }
}
