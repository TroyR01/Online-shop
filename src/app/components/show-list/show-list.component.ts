import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { ShowComponent } from '../show/show.component';

@Component({
  selector: 'app-show-list',
  standalone: true,
  imports: [NgIf,NgFor,ShowComponent],
  templateUrl: './show-list.component.html',
  styleUrl: './show-list.component.css'
})
export class ShowListComponent {
  @Input()
  public products : Product[]=[];
}
