import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IntroPageModule } from '../pages/intro/intro.module';
import { SettingProvider } from '../providers/setting/setting';
import { CuriositiesPage } from '../pages/curiosities/curiosities';
import { DocumentationPage } from '../pages/documentation/documentation';
import { HistoryPage } from '../pages/history/history';
import { TipsPage } from '../pages/tips/tips';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CuriositiesPage,
    DocumentationPage,
    HistoryPage,
    TipsPage
  ],
  imports: [
    BrowserModule,
    //tabsHideOnSubPages esconde tabs quando esta em uma subpagina
    IonicModule.forRoot(MyApp,{tabsHideOnSubPages: true}),
    IntroPageModule,
     
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CuriositiesPage,
    DocumentationPage,
    HistoryPage,
    TipsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SettingProvider
  ]
})
export class AppModule {}
