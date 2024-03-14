import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { ShowComponent } from '../product/product.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgIf,NgFor,ShowComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ShowListComponent {
  @Input()
  public products : Product[]=[];
}
