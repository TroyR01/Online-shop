import { Component } from '@angular/core';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { UserInfoServices } from '../../services/userInfo.services';
import { userInfo } from '../../interfaces/user_info.interface';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [UserCardComponent],
  templateUrl: './user.page.html',
  styleUrl: './user.page.css'
})
export class UserPage {
  constructor(private userInfoService:UserInfoServices){

  }
  public get info():userInfo{
    return this.userInfoService.userinfo;
  }
}
