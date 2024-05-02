import { Injectable } from '@angular/core';
import { userInfo } from '../interfaces/user_info.interface';

@Injectable({
    providedIn: 'root'
})

export class UserInfoServices{
    constructor() { }
    public userinfo: userInfo = 
        {
            "id": 24601,
            "nombre": "Andres Robledo Robledo",
            "correo": "andres@correo.com",
            "direccion": "Calle Falsa 123",
            "colonia": "Del Real"
        };
        
}