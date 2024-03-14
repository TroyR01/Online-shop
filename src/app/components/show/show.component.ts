import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ShowListComponent } from '../show-list/show-list.component';
import { Product } from '../../interfaces/product.interface';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-show',
  standalone: true,
  imports: [NgIf,NgClass],
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ShowComponent {
  @Input()
  public product_item :Product = {
    id: 0,
    title: "",
    seller: "",
    price: 0,
    image: "",
    quantity:0
  };
}
