import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { CreategroupPage } from '../pages/creategroup/creategroup';
import { EditgroupPage } from '../pages/editgroup/editgroup';
import { GroupdetailPage } from '../pages/groupdetail/groupdetail';
import { ClassdetailPage } from '../pages/classdetail/classdetail';
import { ProfilePage } from '../pages/profile/profile';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    CreategroupPage,
    EditgroupPage,
    GroupdetailPage,
    ClassdetailPage,
    ProfilePage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      pageTransition: 'ios-transition',
      swipeBackEnabled: true,
      tabsHideOnSubPages: false
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage, RegisterPage,
    CreategroupPage,
    EditgroupPage,
    GroupdetailPage,
    ClassdetailPage, ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
