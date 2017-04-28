import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage' 
import { Formulario } from '../formulario/formulario'

/**
 * Generated class for the Bienvenido page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-bienvenido',
  templateUrl: 'bienvenido.html',
})
export class Bienvenido {
 public usuario:string;
  
constructor(public navCtrl: NavController, public navParams: NavParams,public storage: Storage) {
 
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Bienvenido');
     this.storage.get('user').then((data)=>{
      console.log(data);
      this.usuario = data;
    });  
  }

  public click(){
  console.log(this.usuario);
 this.storage.set('valu',this.usuario).then(()=>{
 this.navCtrl.push(Formulario);
 });
}

}
