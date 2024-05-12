import { Injectable } from '@angular/core';
import { userInfo } from '../interfaces/user_info.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class UserInfoServices {
    constructor(private http: HttpClient) { }
    public userinfo: userInfo =
        {
            "id": 0,
            "nombre": "",
            "correo": "",
            "password": "",
            "direccion": "",
            "colonia": "",
            "tipo": 0
        };
    public fetchUser(id: Number): void {
        this.http.get("http://localhost:8081/api/users/" + id).subscribe({
            next: (response: any) => {
                this.userinfo = response.result;
                console.log(this.userinfo);
            },
            error: (error: any) => {
                console.log(error);
            }
        })
    }
    public addUser(id: Number, nombre: string, correo: string, password: string, tipo: number): void {
        this.http.post("http://localhost:8081/api/users/", {
            id: id,
            nombre: nombre,
            correo: correo,
            direccion: "direccion 1",
            colonia: "colonia 1",
            password: password,
            tipo:tipo
        }).subscribe({
            next: (response: any) => {
                this.userinfo = response.result
                console.log(response.result);
            },
            error: (error: any) => {
                console.log(error);
            }
        })
    }
    public updateUserInfo(id: Number, direccion: string, colonia: string, email: string): void {
        this.http.put("http://localhost:8081/api/users/" + id, {
            id: id,
            correo: email,
            direccion: direccion,
            colonia: colonia
        }).subscribe({
            next: (response: any) => {
                console.log(response.result);
            },
            error: (error: any) => {
                console.log(error);
            }
        })
    }

}