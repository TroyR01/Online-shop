import { Component, Input } from '@angular/core';
import { ProductInventoryCardComponent } from '../product-inventory-card/product-inventory-card.component';
import { Product } from '../../interfaces/product.interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product-inventory-list',
  standalone: true,
  imports: [ProductInventoryCardComponent,NgFor],
  templateUrl: './product-inventory-list.component.html',
  styleUrl: './product-inventory-list.component.css'
})
export class ProductInventoryListComponent {
  @Input()
  public products : Product[]=[];
}
