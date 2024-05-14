import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ProductServices } from '../../services/products.services';
import { Product } from '../../interfaces/product.interface';
import { ProductInventoryListComponent } from '../../components/product-inventory-list/product-inventory-list.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [NgFor,ProductInventoryListComponent,FormsModule],
  templateUrl: './inventario.page.html',
  styleUrl: './inventario.page.css'
})
export class InventarioPage {
  constructor(private productService : ProductServices){
    this.productService.fetchProductInventario(24601);
  }
  public get products():Product[]{
    return this.productService.invetorylist;
  }
  public prod_name:string = "";
  public price:number = 0.00;
  public quantity:number = 0;
  public description:string = "";
  public edit:string = "";
  public img_url:string = "";
  public addProductInventory():void{
    this.productService.addProduct(this.prod_name,this.price,this.quantity,this.description,this.img_url,24601,this.edit);
  }
}
