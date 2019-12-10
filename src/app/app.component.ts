import { Component } from '@angular/core';

import * as firebase from 'firebase/app';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import 'rxjs/add/operator/map';

@Component({
  selector: 'site-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: any;
  obj: any;

  constructor(public db: AngularFireDatabase) {
    this.db.list('users').valueChanges().subscribe(val => {
      this.items = val;
      console.log(val);
    });
  }

  ngOnInit() { }

}
