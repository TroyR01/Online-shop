import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgClass, NgIf } from '@angular/common';
import { UserInfoServices } from '../../services/userInfo.services';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIf,NgClass,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginPage {
  public id : Number = 0;
  public nombre : string = "";
  public password: string = "";
  public correo:string = "";
  public selectedRole:string = "";
  public tipo:number = 0;

  public passInput: string = "";
  public emailInput:string = "";
  constructor( private userInfoService:UserInfoServices,private router:Router,private http:HttpClient){
    //console.log(userInfoService.user_id)
  }
  public addUser():void{
    this.id = Math.floor(Math.random() * 1000000);
    if(this.selectedRole=="vendedor")
      this.tipo = 1;
    else
      this.tipo = 2;
    console.log(this.tipo);
    this.userInfoService.addUser(this.id,this.nombre,this.correo,this.password,this.tipo);
    this.router.navigate(['/user'+'/'+this.id])

  }
  isSignup: boolean = true;

  toggleForm() {
    this.isSignup = !this.isSignup;
  }
  public onLogin():void{
    this.http.post("http://localhost:8081/api/auth/login",{"email":this.emailInput,
    "password":this.passInput}).subscribe({
      next:(response:any) => {
        localStorage.setItem("auth_token",response.token);
        this.userInfoService.fetchUserId(this.emailInput,this.passInput);
        //localStorage.setItem("id_user",this.userInfoService.user_id.toString());
        this.router.navigate(['/user'+'/'+this.userInfoService.user_id])
      },error:(error:any)=>{
        console.log(error);
      }
    })
  }
}
