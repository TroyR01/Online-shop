import { Component } from '@angular/core';
import { ProductServices } from '../../services/products.services';
import { BuyProductComponent } from '../../components/buy-product/buy-product.component';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [BuyProductComponent],
  templateUrl: './product.page.html',
  styleUrl: './product.page.css'
})
export class ProductPage {
  constructor(private productService:ProductServices){

  }
  public get product(): Product {
    return this.productService.product;
  }
}
