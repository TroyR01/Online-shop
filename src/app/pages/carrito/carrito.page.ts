import { Component } from '@angular/core';
import { CarritoListComponent } from '../../components/carrito-list/carrito-list.component';
import { Product } from '../../interfaces/product.interface';
import { ProductServices } from '../../services/products.services';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CarritoListComponent],
  templateUrl: './carrito.page.html',
  styleUrl: './carrito.page.css'
})
export class CarritoPage {
  constructor(private productService : ProductServices){
    
  }
  public get products():Product[]{
    return this.productService.productlist;
  }
}
