import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from "firebase/app";

@Component({
  selector: 'app-application-start',
  templateUrl: './application-start.component.html',
  styleUrls: ['./application-start.component.css']
})

export class ApplicationStartComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    console.log("---");
    //console.log(firebase.database().ref('/users').once('value'));
    //console.log("---");
  }
}