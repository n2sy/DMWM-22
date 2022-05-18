import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { ChildComponent } from './child/child.component';
import { CvComponent } from './cv/cv.component';
import { ListeComponent } from './liste/liste.component';
import { ItemComponent } from './item/item.component';
import { DetailsComponent } from './details/details.component';
import { HomeaccountComponent } from './accounts/homeaccount/homeaccount.component';
import { InfoaccountComponent } from './accounts/infoaccount/infoaccount.component';
import { AddaccountComponent } from './accounts/addaccount/addaccount.component';
import { DirectComponent } from './direct/direct.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { ManageServersComponent } from './manage-servers/manage-servers.component';
import { CustomDirDirective } from './custom-dir.directive';
import { ShortPipe } from './short.pipe';
import { FilterPipe } from './filter.pipe';
import { DefaultimagePipe } from './defaultimage.pipe';
import { FirstService } from './services/first.service';
import { RecruterComponent } from './recruter/recruter.component';
import { HomeComponent } from './home/home.component';
import { DMWMW_ROUTING } from './app.routing';
import { NavbarComponent } from './navbar/navbar.component';
import { InfosComponent } from './infos/infos.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SubModule } from './sub/sub.module';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpComponent } from './http/http.component';
import { DMWM_INTERCEPTOR } from './token.interceptor';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBDDfZzZShRyDiMtYA41lafi7xGYCgDQ4g',
  authDomain: 'ng-tasks-c6b03.firebaseapp.com',
  databaseURL: 'https://ng-tasks-c6b03.firebaseio.com',
  projectId: 'ng-tasks-c6b03',
  storageBucket: 'ng-tasks-c6b03.appspot.com',
  messagingSenderId: '577282019785',
  appId: '1:577282019785:web:db19d822bc874e0b18d818',
};

// Initialize Firebase

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ChildComponent,
    CvComponent,
    ListeComponent,
    ItemComponent,
    DetailsComponent,
    HomeaccountComponent,
    InfoaccountComponent,
    AddaccountComponent,
    DirectComponent,
    MsWordComponent,
    ManageServersComponent,
    CustomDirDirective,
    ShortPipe,
    FilterPipe,
    DefaultimagePipe,
    RecruterComponent,
    HomeComponent,
    NavbarComponent,
    InfosComponent,
    EditComponent,
    AddComponent,
    NotFoundComponent,
    LoginComponent,
    HttpComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SubModule,
    DMWMW_ROUTING,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
  ],
  providers: [DMWM_INTERCEPTOR],
  bootstrap: [AppComponent],
})
export class AppModule {}
