import { Injectable } from '@angular/core';
import { creditCard } from '../interfaces/creditCard.interface';

@Injectable({
    providedIn: 'root'
})

export class CreditCardServices{
    constructor() { }
    public creditCardList: creditCard[] = [
        {
            "num_tarjeta": "1212121212331",
            "nombre": "Andres Robledo Robledo",
            "cvv": "123",
            "date": "02/26",
            "isSelected":false
        },
        {
            "num_tarjeta": "1212121212331",
            "nombre": "Romina Perez Flores",
            "cvv": "123",
            "date": "02/26",
            "isSelected":false
        },
    ]
}