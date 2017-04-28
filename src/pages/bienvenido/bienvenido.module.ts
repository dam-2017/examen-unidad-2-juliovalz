import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Bienvenido } from './bienvenido';

@NgModule({
  declarations: [
    Bienvenido,
  ],
  imports: [
    IonicPageModule.forChild(Bienvenido),
  ],
  exports: [
    Bienvenido
  ]
})
export class BienvenidoModule {}
