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
        icon: 'md-paper',
        handler: () => {
          this.goToPage(HistoryPage);
          console.log('Historia Selecionada');
        }
      }, {
        text: 'Dicas',
        icon: 'md-paper',
        handler: () => {
          this.goToPage(TipsPage);
          console.log('Dicas Selecionadas');
        }
      }, {
        text: 'Curiosidades',
        icon: 'md-paper',
        handler: () => {
          this.goToPage(CuriositiesPage);
          console.log('Curiosidades Selecionadas');
        }
      }, {
        text: 'Documentação',
        icon: 'md-paper',
        handler: () => {
          this.goToPage(DocumentationPage);
          console.log('Documentação Selecionada');
        }
      }, {
        text: 'Ver intro?',
        icon: 'md-paper',
        handler: () => {
          this.goToPage(IntroPage);
          console.log("Intro Selecionada")
        }
      },
      {
        text: 'Cancelar',
        icon: 'md-paper',
        role: 'cancel',
        handler: () => {
          console.log('Cancelar Selecionado');
        }
      },]
    });
    actionSheet.present();
  }
}
