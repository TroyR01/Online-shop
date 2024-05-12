import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class ProductServices{
    constructor(private http: HttpClient) {
        this.fetchProduct();
     }

    public searchByTerm(value:string): void{
        //this.tvShow1 = this.tvShows2.filter(item => item.title.toLocaleUpperCase().includes(value.toLocaleUpperCase()))
        this.fetchProduct(value);
      }
      public fetchProduct(searchTerm = ""):void{
        this.http.get("http://localhost:8081/api/products?searchTerm=" + searchTerm).subscribe({
          next: (response:any) => {
            this.productlist = response.result
          },
          error: (error:any)=>{
            console.log(error);
          }
        })
      }
      public fetchIDProduct(id:Number):void{
  
        this.http.get("http://localhost:8081/api/products/" + id).subscribe({
          next: (response:any) => {
            this.product = response.result
            console.log(response.result);
          },
          error: (error:any)=>{
            console.log(error);
          }
        })
      }
      public product: Product = {
        "title": "",
        "seller": "",
        "price": 0.00,
        "image": "https://resources.sanborns.com.mx/imagenes-sanborns-ii/1200/9786075280073.jpg",
        "quantity": 0,
        "id": 0,
        "descripcion":"Descripcion 1",
        "id_vendedor":-1
    }
    /*public product: Product = {
        "title": "One Piece Manga Tomo 1",
        "seller": "Panini Manga Mx",
        "price": 150.00,
        "image": "https://resources.sanborns.com.mx/imagenes-sanborns-ii/1200/9786075280073.jpg",
        "quantity": 10,
        "id": 0,
        "descripcion":"Descripcion 1",
        "id_vendedor":2
    }*/
    public productlist: Product[] = [];
    /*public productlist: Product[] = [
        {
            "title": "One Piece Manga Tomo 1",
            "seller": "Panini Manga Mx",
            "price": 150.00,
            "image": "https://resources.sanborns.com.mx/imagenes-sanborns-ii/1200/9786075280073.jpg",
            "quantity": 10,
            "id": 0,
            "descripcion":"Descripcion 1",
            "id_vendedor":2
        },
        {
            "title": "Dragon Ball Manga Tomo 1",
            "seller": "Panini Manga Mx",
            "price": 200.00,
            "image": "https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_gl36ebmbf578b5bpo86oo2g421/-S897-FWEBP",
            "quantity": 10,
            "id": 0,
            "descripcion":"Descripcion 1",
            "id_vendedor":2
        },
    ]*/
}