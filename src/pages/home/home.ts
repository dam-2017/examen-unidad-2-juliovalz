import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup} from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Bienvenido} from '../bienvenido/bienvenido'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public formulario:FormGroup;
public usuario:any;
public contraseña:any;
public login: boolean;

  constructor(public navCtrl: NavController, public form:FormBuilder, public storage: Storage) {
    this.formulario = this.form.group({
      usuario:["",Validators.compose([Validators.required,Validators.minLength(6),Validators.pattern("[a-z]*")])],
      contraseña:["",Validators.compose([Validators.required,Validators.minLength(8),Validators.pattern("((.)*[|@#%&]+(.)*[0-9]+(.)*)+|((.)*[0-9]+(.)*[|@#%&]+(.)*)+")])]
    });

  }
public click(){
  this.login = true;
  console.log(this.formulario.get('usuario').value);
  if(this.formulario.valid && this.formulario.get('usuario').value == 'jucevalenciaza' && this.formulario.get('contraseña').value == '13400500@ittepic'){
 this.storage.set('user',this.formulario.get('usuario').value).then(()=>{
 this.navCtrl.push(Bienvenido);
 });
}
}
}