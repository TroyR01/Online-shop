import { Component } from '@angular/core';
import { CarritoListComponent } from '../../components/carrito-list/carrito-list.component';
import { Product } from '../../interfaces/product.interface';
import { ProductServices } from '../../services/products.services';
import { UserInfoServices } from '../../services/userInfo.services';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CarritoListComponent,NgIf],
  templateUrl: './carrito.page.html',
  styleUrl: './carrito.page.css'
})
export class CarritoPage {
  constructor(private productService : ProductServices,private userInfo:UserInfoServices){
    productService.productId=0;
    console.log(productService.productId);
    const id_user = localStorage.getItem("id_user");
    const id = parseInt(id_user??"", 10); // El segundo argumento especifica la base numérica (base 10 en este caso)
    console.log(id);
    productService.fetchCarrito(id);
  }
  public get products():Product[]{
    return this.productService.carritolist;
  }
}
