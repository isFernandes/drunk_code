import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CuriositiesPage } from './curiosities';

@NgModule({
  declarations: [
    CuriositiesPage,
  ],
  imports: [
    IonicPageModule.forChild(CuriositiesPage),
  ],
})
export class CuriositiesPageModule {}
