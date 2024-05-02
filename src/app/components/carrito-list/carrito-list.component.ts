import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ShowComponent } from '../product/product.component';
import { Product } from '../../interfaces/product.interface';
import { CarritoProductComponent } from '../carrito-product/carrito-product.component';

@Component({
  selector: 'app-carrito-list',
  standalone: true,
  imports: [NgFor,NgIf,ShowComponent,CarritoProductComponent],
  templateUrl: './carrito-list.component.html',
  styleUrl: './carrito-list.component.css'
})
export class CarritoListComponent {
  @Input()
  public products : Product[]=[];
}
