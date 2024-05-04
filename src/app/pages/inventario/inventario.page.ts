import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ProductServices } from '../../services/products.services';
import { Product } from '../../interfaces/product.interface';
import { ProductInventoryListComponent } from '../../components/product-inventory-list/product-inventory-list.component';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [NgFor,ProductInventoryListComponent],
  templateUrl: './inventario.page.html',
  styleUrl: './inventario.page.css'
})
export class InventarioPage {
  constructor(private productService : ProductServices){
    
  }
  public get products():Product[]{
    return this.productService.productlist;
  }

}
