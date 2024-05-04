import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-buy-product',
  standalone: true,
  imports: [NgIf],
  templateUrl: './buy-product.component.html',
  styleUrl: './buy-product.component.css'
})
export class BuyProductComponent {
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
