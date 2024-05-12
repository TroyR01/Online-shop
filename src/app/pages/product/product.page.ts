import { Component, Input } from '@angular/core';
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
  @Input() id!: Number;
  ngOnInit(): void {
    this.productService.fetchIDProduct(this.id)
  }
  constructor(private productService:ProductServices){
    this.productService.fetchProduct();
  }
  public get product(): Product {
    return this.productService.product;
  }
}
