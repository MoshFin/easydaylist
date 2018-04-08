import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the ProvidersFirebaseFirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor(
    private angularFireDatabase: AngularFireDatabase) {
    
  }

  testFireBase() {
    this.angularFireDatabase.list('/test/').push({name: 'This is Test'})
  }

}
