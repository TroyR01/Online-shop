import { Component, Input } from '@angular/core';
import { userInfo } from '../../interfaces/user_info.interface';
import { FormsModule } from '@angular/forms';
import { UserInfoServices } from '../../services/userInfo.services';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  constructor(private userService:UserInfoServices,private router:Router) { 
    
  }
  @Input()
  public userInfo: userInfo = {
    id: 0,
    correo: '',
    nombre: '',
    direccion: '',
    colonia: '',
    tipo: 0,
    password: ""
  }
  public correo: string = "";
  public direccion: string = "";
  public colonia: string = "";
  public updateInfo(): void {
    if (this.correo == "") {
      this.correo = this.userInfo.correo;
    }
    if (this.direccion == "") {
      this.direccion = this.userInfo.direccion;
    }
    if (this.colonia == "") {
      this.colonia = this.userInfo.colonia;
    }
    
    this.userService.updateUserInfo(this.userInfo.id,this.direccion,this.colonia,this.correo);
    this.router.navigate(['/user', this.userInfo.id]);
  }
  public btnInventario(){
    this.router.navigate(["/inventario"]);
  }
  public logOut():void{
    localStorage.clear();
    this.router.navigate(["/home"]);
  }
}

