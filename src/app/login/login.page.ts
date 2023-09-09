import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, NavigationExtras, RouterLinkWithHref } from '@angular/router';
import { IUserLogin } from '../models/IUserLogin';
import { UserModel } from '../models/UserModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLinkWithHref, FormsModule]})
export class LoginPage implements OnInit {

  listUser: UserModel[] = [
    new UserModel('Percy','Suares','jgomez@gmail.com',undefined,'ALUMNO','percy','percy123'),
    new UserModel('Eduardo','Donoso','jperez@gmail.com',undefined,'CONDUCTOR','edonoso','eduardo123'),
    new UserModel('Pedro','sanchez','cgomez@gmail.com',undefined,'ALUMNO','psanchez','pedro123'),
    new UserModel('Celeste','Ramirez','vgomez@gmail.com',undefined,'CONDUCTOR','cramirez','celeste123')
  ];

  userLoginModal: IUserLogin = {
    username: '',
    password: ''
  };

  constructor(private route: Router) { }

  ngOnInit() {
    this.userLoginModalRestart();
  }

  userLogin(userLoginInfo: IUserLogin): boolean{
    for(let i = 0; i < this.listUser.length; i++){
      if((this.listUser[i].username == userLoginInfo.username) && (this.listUser[i].password == userLoginInfo.password)){
        console.log('User Loged...', this.userLoginModal.username, this.userLoginModal.password);
        let userInfoSend: NavigationExtras = {
          state: {
            user: this.listUser[i]
          }
        }
        if(this.listUser[i].type == 'ALUMNO'){
          this.route.navigate(['/alumno'], userInfoSend);
          return true;
        }else{
         this.route.navigate(['/conductor'], userInfoSend);
          return true;
        }
      }
    }
    this.userLoginModalRestart();
    return false;
    
  }

  userLoginModalRestart(): void{
    this.userLoginModal.username = '';
    this.userLoginModal.password = '';
  }
// +++++++++++++++++++++++++++++++++++++++


}
