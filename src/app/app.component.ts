import { Component } from '@angular/core';

import * as firebase from 'firebase/app';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

//import 'rxjs/add/operator/map'; //import { Observable } from 'rxjs';

@Component({
  selector: 'site-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public db: AngularFireDatabase) { }

  ngOnInit() { }
}
