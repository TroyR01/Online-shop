import { Injectable } from '@angular/core';
import { userInfo } from '../interfaces/user_info.interface';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class UserInfoServices {
    constructor(private http: HttpClient,private router:Router) { }
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
    public user_id:Number = 0;
    public user_name:string = "";
    public fetchUserId(correo:string,password:string):void{
        this.http.get("http://localhost:8081/api/users/"+correo+"/"+password).subscribe({
            next: (response: any) => {
                this.userinfo = response.result;
                this.user_name = this.userinfo.nombre;
                this.user_id = this.userinfo.id;
                console.log(this.userinfo);
                localStorage.setItem("id_user",this.user_id.toString());
            },
            error: (error: any) => {
                console.log(error);
            }
        })
    }
    public fetchUser(id: Number): void {
        const token = localStorage.getItem("auth_token")??"";
        this.http.get("http://localhost:8081/api/users/" + id,{
            headers:{
                "Authorization":token
              }
        }).subscribe({
            next: (response: any) => {
                this.userinfo = response.result;
                this.user_name = this.userinfo.nombre;
                this.user_id = this.userinfo.id;
                console.log(this.user_id);
                //localStorage.setItem("id_user",this.user_id.toString());
            },
            error: (error: any) => {
                console.log(error);
                //this.router.navigate(["login"]);
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