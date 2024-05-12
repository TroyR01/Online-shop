import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ProductServices } from './services/products.services';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AnimatedStore';
  public searchTerm : string = "";
  constructor(private productService : ProductServices, private router: Router){

  }

  public btnClickSearch():void
  {
    this.productService.searchByTerm(this.searchTerm);
    this.router.navigate(['/home']);
  }
}
