import { Component } from '@angular/core';
import { ProductServices } from '../../services/products.services';
import { Product } from '../../interfaces/product.interface';
import { ShowListComponent } from '../../components/product-list/product-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ShowListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomePage {
  constructor(private productService : ProductServices){
    
  }
  public get products():Product[]{
    return this.productService.productlist;
  }
}
