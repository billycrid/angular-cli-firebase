import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { UserFactoryService } from "../../../../shared/user-factory.service";

@Component({
  selector: 'app-page-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  constructor(public userService: UserService, public userFactory: UserFactoryService) { }

  ngOnInit() {
  }

  loginWithFb() {
      this.userService.loginFb();
  }

  loginWithEmail() {
      this.userService.loginEmail(this.email, this.password).then(
          (data) => {
              console.log(data);
          }
      );
  }

  logout() {
      this.userService.logout().then(
          (data) => console.log(data)
      );
  }
}
