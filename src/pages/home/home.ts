import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IntroPage } from '../intro/intro';
import { ActionSheetController } from 'ionic-angular';
import { CuriositiesPage } from '../curiosities/curiosities';
import { DocumentationPage } from '../documentation/documentation';
import { HistoryPage } from '../history/history';
import { TipsPage } from '../tips/tips';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    public actionSheetCtrl:ActionSheetController) {  }
    
    //controle de paginas do menu
    goToPage(pagina){
      const page = pagina;
      this.navCtrl.push(page);
    }

  //actionSheet configura para menu  
  menu() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Menu',
      buttons: [{
        text: 'Historia',
        icon: 'md-beer',
        handler: () => {
          this.goToPage(HistoryPage);
        }
      }, {
        text: 'Dicas',
        icon: 'md-information-circle',
        handler: () => {
          this.goToPage(TipsPage);
        }
      }, {
        text: 'Curiosidades',
        icon: 'md-search',
        handler: () => {
          this.goToPage(CuriositiesPage);
        }
      }, {
        text: 'Documentação',
        icon: 'md-document',
        handler: () => {
          this.goToPage(DocumentationPage);
        }
      }, {
        text: 'Ver intro?',
        icon: 'md-laptop',
        handler: () => {
          this.goToPage(IntroPage);
        }
      },
      {
        text: 'Cancelar',
        icon: 'md-close-circle',
        role: 'cancel',
        handler: () => {
        }
      },]
    });
    actionSheet.present();
  }
}