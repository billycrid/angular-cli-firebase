import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';

import { UserModule} from '../user/user.module';

@NgModule({
  imports: [
    CommonModule,
    UserModule
  ],
  exports: [
      NavbarComponent
  ],
  declarations: [NavbarComponent]
})
export class NavbarModule { }
