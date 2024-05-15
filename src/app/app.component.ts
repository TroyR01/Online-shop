import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ProductServices } from './services/products.services';
import { NgIf } from '@angular/common';
import { UserInfoServices } from './services/userInfo.services';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,FormsModule,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AnimatedStore';
  public searchTerm : string = "";
  
  constructor(private productService : ProductServices, private router: Router,private user:UserInfoServices){

  }
  public username = this.user.user_name;
  public get isAuthenticated():boolean{
    console.log("Hola"+this.username);
    const token = localStorage.getItem("auth_token")??"";
    if(token)
      return true;
    else
      return false;
  }
  public btnUserInfo():void{
    const id = localStorage.getItem("id_user")??"";
    const id_user = parseInt(id,10);
    this.router.navigate(['/user',id_user]);
  }
  public btnClickSearch():void
  {
    this.productService.searchByTerm(this.searchTerm);
    this.router.navigate(['/home']);
  }
  public btnCarrito():void{
    this.router.navigate(["/carrito"]);
  }
}
