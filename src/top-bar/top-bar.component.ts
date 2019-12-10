import { Component, OnInit } from '@angular/core';

import { mainModules } from './mainModules';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})

export class TopBarComponent implements OnInit {
  constructor() { }
  modules = mainModules;

  ngOnInit() {
  }

}
