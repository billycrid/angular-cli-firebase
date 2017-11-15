import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserFactoryService } from './shared/user-factory.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(api: AngularFireAuth, userService: UserFactoryService) {
      api.auth.onAuthStateChanged(
          (user) => {
              if (user) {
                userService.user = user;
              } else {
                userService.user = null;
              }
          }
      )
  }
}
