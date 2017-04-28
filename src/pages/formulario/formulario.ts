import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup} from '@angular/forms';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the Formulario page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html',
})
export class Formulario {

  public usuario:string;
  public formulario:FormGroup;
  public nombre:string;
  public ap:string;
  public am:string;
  public fecha:string;
  public submit:boolean;
  public rfc:string;


constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public form:FormBuilder) {
this.formulario = this.form.group({
nombre:["",Validators.required],
ap:["",Validators.required],
am:["",Validators.required],
fecha: ["",Validators.compose([Validators.required,Validators.pattern("[0-9][0-9][0-9][0-9][/][0-9][0-9][/][0-9][0-9]")])]
 });
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Formulario');
     this.storage.get('valu').then((data)=>{
      console.log(data);
      this.usuario = data;
    });  
    
  }

   public click(){
  this.rfc=""+this.nombre.substring(0,3)+this.ap.substring(0,2)+this.am.substring(0,2)+this.fecha.substring(2,4)+this.fecha.substring(4,7)+this.fecha.substring(6,8);
  this.submit = true;
  console.log(this.rfc);
 this.storage.set('valu',this.usuario).then(()=>{
 this.navCtrl.push(Formulario);
 });
}

}