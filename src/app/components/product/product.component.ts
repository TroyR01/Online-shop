import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ShowListComponent } from '../product-list/product-list.component';
import { Product } from '../../interfaces/product.interface';
import { NgClass, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgIf,NgClass,RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ShowComponent {
  @Input()
  public product_item :Product = {
    id: 0,
    title: "",
    seller: "",
    price: 0,
    image: "",
    quantity:0,
    descripcion:"",
    id_vendedor:0
  };
  constructor (private router : Router){}
  public searchbyId(id:number):void{
    this.router.navigate(['/producto', id]);
  }
}
