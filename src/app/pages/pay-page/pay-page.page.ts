import { Component } from '@angular/core';
import { creditCard } from '../../interfaces/creditCard.interface';
import { CreditCardServices } from '../../services/creditCards.services';
import { CreditCardListComponent } from '../../components/credit-card-list/credit-card-list.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pay-page',
  standalone: true,
  imports: [CreditCardListComponent,FormsModule],
  templateUrl: './pay-page.page.html',
  styleUrl: './pay-page.page.css'
})
export class PayPage {
  public num_tar:string = "";
  public nombre:string = "";
  public cvv:string = "";
  public date:string = "";
  constructor(private creditService:CreditCardServices){
    const id = localStorage.getItem("id_user")??"";
    const id_user = parseInt(id,10);
    this.creditService.fetchCreditCard(id_user);
  }
  public get cards():creditCard[]{
    return this.creditService.creditCardList;
  }
  public pay():void{
    const id = localStorage.getItem("id_user")??"";
    const id_user = parseInt(id,10);
    if(!this.num_tar||!this.nombre||!this.cvv||!this.date)
    {
      //this.creditService
    }else{
      this.creditService.addCreditCard(this.num_tar,this.date,this.cvv,id_user,this.nombre);
    }
  }
}
