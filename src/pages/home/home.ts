import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase-provider';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private firebaseProvider: FirebaseProvider) {

  }

  addTest(){
    this.firebaseProvider.testFireBase();
  }

}
