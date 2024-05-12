import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { Router } from '@angular/router';
import { ProductServices } from '../../services/products.services';

@Component({
  selector: 'app-carrito-product',
  standalone: true,
  imports: [],
  templateUrl: './carrito-product.component.html',
  styleUrl: './carrito-product.component.css'
})
export class CarritoProductComponent {
  constructor (private router : Router,private productService:ProductServices){
  }
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
  public deleteProduct(id_product:Number):void{
    const id_user=24601;
    this.productService.deleteProductCarrito(id_product,id_user);
    this.router.navigate(['/carrito']);
  }
}
