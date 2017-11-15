import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

// Components
import { AppComponent } from './app.component';

// Services
import { UserFactoryService} from './shared/user-factory.service';

// Modules
import { NavbarModule } from './modules/navbar/navbar.module';
import { UserModule } from './modules/user/user.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    NavbarModule,
    UserModule
  ],
  providers: [UserFactoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
