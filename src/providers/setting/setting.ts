import { Injectable } from '@angular/core';

let config_key = "config";

@Injectable()
export class SettingProvider {
  private config = {
    showSlide: false
  }
  constructor() {
  
  }
  // Recuperar dados do localstorage
  getConfigData(): any{
    return localStorage.getItem(config_key)
  }

  // Gravar dados no localstorage
  setConfigData(showSlide?: boolean){
    let config = {
      showSlide: false
    };
    
    if(showSlide){
      config.showSlide = showSlide;
    }

    localStorage.setItem(config_key, JSON.stringify(config));
  }
}
