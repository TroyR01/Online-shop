import { Component } from '@angular/core';
import { ProductServices } from '../../services/products.services';
import { Product } from '../../interfaces/product.interface';
import { ShowListComponent } from '../../components/product-list/product-list.component';
import { CreditCardListComponent } from '../../components/credit-card-list/credit-card-list.component';
import { CreditCardServices } from '../../services/creditCards.services';
import { creditCard } from '../../interfaces/creditCard.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ShowListComponent,CreditCardListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomePage {
  constructor(private productService : ProductServices,private creditService:CreditCardServices){
    
  }
  public get products():Product[]{
    return this.productService.productlist;
  }
  public get cards():creditCard[]{
    return this.creditService.creditCardList;
  }
}
