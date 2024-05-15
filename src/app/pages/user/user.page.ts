import { Component, Input, OnInit } from '@angular/core';
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
export class UserPage implements OnInit{
  
  constructor(private userInfoService:UserInfoServices){
    this.userInfoService.fetchUser(this.id);
  }
  @Input() id!: Number;
  ngOnInit(): void {
    this.userInfoService.fetchUser(this.id);
  }
  public get info():userInfo{
    //console.log("user ts: "+ this.userInfoService.userinfo.colonia);
    return this.userInfoService.userinfo;
  }
}
