import { Component, Input } from '@angular/core';
import { userInfo } from '../../interfaces/user_info.interface';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input()
  public userInfo:userInfo={
    id: 0,
    correo: '',
    nombre: '',
    direccion: '',
    colonia:''
  }

}
