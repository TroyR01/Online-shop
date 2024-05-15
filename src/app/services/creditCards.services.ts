import { Injectable } from '@angular/core';
import { creditCard } from '../interfaces/creditCard.interface';
import { HttpClient } from '@angular/common/http';
import { UserInfoServices } from './userInfo.services';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class CreditCardServices {
    constructor(private http: HttpClient,private router:Router) {
    }
    public creditCardList: creditCard[] = [];
    public fetchCreditCard(id: Number): void {
        const token = localStorage.getItem("auth_token")??"";
        this.http.get("http://localhost:8081/api/creditCard/" + id,{
            headers:{
                "Authorization":token
              }
        }).subscribe({
            next: (response: any) => {
                this.creditCardList = response.result;
                console.log(this.creditCardList);
            },
            error: (error: any) => {
                this.router.navigate(["/login"]);
                console.log(error);
            }
        })
    }
    public addCreditCard(num_tar: string, date: string, cvv: string, id_user: Number, nombre: string): void {
        this.http.post("http://localhost:8081/api/creditCard", {
            num_tarjeta: num_tar,
            cvv: cvv,
            date: date,
            nombre: nombre,
            id_user: id_user,
        }).subscribe({
            next: (response: any) => {
                this.creditCardList = response.result
                console.log(response.result);
            },
            error: (error: any) => {
                console.log(error);
            }
        })
    }
    public deleteCreditCard(num_tar: string, id_user: Number) {
        this.http.delete("http://localhost:8081/api/creditCard/"+num_tar+"/"+id_user).subscribe({
            next: (response: any) => {
                console.log(response.result);
            },
            error: (error: any) => {
                console.log(error);
            }
        })
    }
    /*public creditCardList: creditCard[] = [
        {
            "num_tarjeta": "1212121212331",
            "nombre": "Andres Robledo Robledo",
            "cvv": "123",
            "date": "02/26",
            "isSelected":false,
            "id_user":0
        },
        {
            "num_tarjeta": "1212121212331",
            "nombre": "Romina Perez Flores",
            "cvv": "123",
            "date": "02/26",
            "isSelected":false,
            "id_user":0
        },
    ]*/
}