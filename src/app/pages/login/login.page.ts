import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgClass, NgIf } from '@angular/common';
import { UserInfoServices } from '../../services/userInfo.services';
import { FormsModule } from '@angular/forms';


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
  public tipo:number = 0;
  constructor( private userInfoService:UserInfoServices){

  }
  public addUser():void{
    this.id = Math.floor(Math.random() * 1000000);
    this.userInfoService.addUser(this.id,this.nombre,this.correo,this.password,this.tipo);
  }
  isSignup: boolean = true;

  toggleForm() {
    this.isSignup = !this.isSignup;
  }
}
