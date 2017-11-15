import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  email: string = '';
  password: string = '';
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  signUp(){
    this.userService.signUp(this.email, this.password).then(
        (data) => {
            console.log(data);
        }
    );
  }
}
