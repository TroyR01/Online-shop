import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { NgIf } from '@angular/common';
import { ProductServices } from '../../services/products.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-inventory-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './product-inventory-card.component.html',
  styleUrl: './product-inventory-card.component.css'
})
export class ProductInventoryCardComponent {
  constructor(private productService:ProductServices,private router:Router){
  }
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
  public addProductInventory(id:Number,id_vendedor:Number):void{
    this.productService.addQProduct(id,id_vendedor);
  }
  public reduceProductInventory(id:Number,id_vendedor:Number):void{
    this.productService.reduceProduct(id,id_vendedor);
  }
}
