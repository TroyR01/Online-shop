import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-carrito-product',
  standalone: true,
  imports: [],
  templateUrl: './carrito-product.component.html',
  styleUrl: './carrito-product.component.css'
})
export class CarritoProductComponent {
  @Input()
  public product_item :Product = {
    id: 0,
    title: "",
    seller: "",
    price: 0,
    image: "",
    quantity: 0,
    descripcion: "",
    id_vendedor: 0
  };
}
