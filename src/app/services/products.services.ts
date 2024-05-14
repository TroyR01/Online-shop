import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserInfoServices } from './userInfo.services';

@Injectable({
  providedIn: 'root'
})

export class ProductServices {
  constructor(private http: HttpClient,private router:Router,private userInfo:UserInfoServices) {
    this.fetchProduct();
  }
  public addProduct(prod_name:string,price:Number,quantity:Number,desc:string,url:string,id_vendedor:Number,seller:string):void{
    this.http.post("http://localhost:8081/api/products", {
        id:90,
        title:prod_name,
        seller:seller,
        price:price,
        image:url,
        quantity:quantity,
        descripcion:desc,
        id_vendedor:id_vendedor
    }).subscribe({
      next: (response: any) => {
        //this.product_item = response.result
        console.log(response.result);
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }
  public searchByTerm(value: string): void {
    //this.tvShow1 = this.tvShows2.filter(item => item.title.toLocaleUpperCase().includes(value.toLocaleUpperCase()))
    this.fetchProduct(value);
  }
  public fetchProduct(searchTerm = ""): void {
    this.http.get("http://localhost:8081/api/products?searchTerm=" + searchTerm).subscribe({
      next: (response: any) => {
        this.productlist = response.result
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }
  public fetchIDProduct(id: Number): void {

    this.http.get("http://localhost:8081/api/products/" + id).subscribe({
      next: (response: any) => {
        this.product = response.result
        console.log(response.result);
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }

  public fetchCarrito(id: Number): void {
    const token = localStorage.getItem("auth_token")??"";
    this.http.get("http://localhost:8081/api/carrito/" + id,{
      headers:{
        "Authorization":token
      }
    }).subscribe({
      next: (response: any) => {
        this.carritolist = response.result
        console.log(response.result);
      },
      error: (error: any) => {
        console.log(error);
        this.router.navigate(["/login"]);
      }
    })
  }
  public addProductCarrito(id: Number): void {
    const token = localStorage.getItem("auth_token")??"";
    const id_user = localStorage.getItem("id_user");
    console.log(id_user)
    this.http.post("http://localhost:8081/api/carrito/" + id, {
      id_user: parseInt(id_user??"", 10),
      id: 20
    },
    {
      headers:{
        "Authorization":token
      }
    }
  ).subscribe({
      next: (response: any) => {
        //this.product_item = response.result
        console.log(response.result);
      },
      error: (error: any) => {
        console.log(error);
        this.router.navigate(["/login"]);
        
      }
    })
  }
  public deleteProductCarrito(id_product: Number, id_user: Number): void {
    this.http.delete("http://localhost:8081/api/carrito/" + id_user + "/" + id_product).subscribe({
      next: (response: any) => {
        console.log(response.result);
      },
      error: (error: any) => {
        console.log(error);
        this.router.navigate(["/login"]);
      }
    })
  }

  public addQProduct(id: Number, id_user: Number) {
    console.log(id,id_user);
    this.http.put("http://localhost:8081/api/products", {
      id: id,
      id_vendedor: id_user,
      quantity:1
    }).subscribe({
      next: (response: any) => {
        console.log(response.result);
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }
  public reduceProduct(id: Number, id_user: Number) {
    console.log(id,id_user);
    this.http.put("http://localhost:8081/api/products", {
      id: id,
      id_vendedor: id_user,
      quantity:-1
    }).subscribe({
      next: (response: any) => {
        console.log(response.result);
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }
  public fetchProductInventario(id_vendedor:Number){
    this.http.get("http://localhost:8081/api/inventory/" + id_vendedor).subscribe({
      next: (response: any) => {
        this.invetorylist = response.result
        console.log(response.result);
      },
      error: (error: any) => {
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
    "descripcion": "Descripcion 1",
    "id_vendedor": -1
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
  public carritolist: Product[] = [];
  public invetorylist: Product[] = [];
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