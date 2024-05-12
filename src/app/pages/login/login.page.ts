import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgClass, NgIf } from '@angular/common';
import { UserInfoServices } from '../../services/userInfo.services';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


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
  constructor( private userInfoService:UserInfoServices,private router:Router){

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
}
