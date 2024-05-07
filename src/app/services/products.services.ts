import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Injectable({
    providedIn: 'root'
})

export class ProductServices{
    constructor() { }
    public product: Product = {
        "title": "One Piece Manga Tomo 1",
        "seller": "Panini Manga Mx",
        "price": 150.00,
        "image": "https://resources.sanborns.com.mx/imagenes-sanborns-ii/1200/9786075280073.jpg",
        "quantity": 10,
        "id": 0,
        "descripcion":"Descripcion 1",
        "id_vendedor":2
    }
    public productlist: Product[] = [
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
    ]
}