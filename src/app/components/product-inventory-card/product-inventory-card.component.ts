import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-product-inventory-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './product-inventory-card.component.html',
  styleUrl: './product-inventory-card.component.css'
})
export class ProductInventoryCardComponent {
  @Input()
  public product_item :Product = {
    id: 0,
    title: "",
    seller: "",
    price: 0,
    image: "",
    quantity:0,
    descripcion:"",
    id_vendedor:""
  };
}
