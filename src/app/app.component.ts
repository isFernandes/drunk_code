import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { IntroPage } from '../pages/intro/intro';

import { SettingProvider } from "../providers/setting/setting";
@Component({
  templateUrl: 'app.html',
  providers: [
    SettingProvider
  ]
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    settingProvider: SettingProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
    
      let setting = settingProvider.getConfigData();
      if(setting == null){
        this.rootPage = IntroPage;
        settingProvider.setConfigData(false);
      }else{
        this.rootPage = TabsPage;
      }
      //exibe o valor de setting no console log
      console.log(setting);


      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
