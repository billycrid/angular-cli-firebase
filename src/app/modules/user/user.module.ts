import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UserService } from './user.service';
import { LoginComponent } from './components/page-login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
      SignUpComponent,
      LoginComponent,
      SearchComponent
  ],
  providers: [
      UserService
  ],
  declarations: [SignUpComponent, LoginComponent, ProfileComponent, SearchComponent]
})
export class UserModule { }
