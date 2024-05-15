import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ProductServices } from '../../services/products.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-product',
  standalone: true,
  imports: [NgIf],
  templateUrl: './buy-product.component.html',
  styleUrl: './buy-product.component.css'
})
export class BuyProductComponent {
  constructor(private http: HttpClient,private productService:ProductServices,private router:Router) { 
    
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
  public btnAddCarrito(id:Number){
    this.productService.addProductCarrito(id);
    this.router.navigate(["/carrito"])
  }
  public btnBuy(){
    this.productService.productId = this.product_item.id;
    this.router.navigate(["pay"])
  }
}
