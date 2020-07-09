import { Component, OnInit } from '@angular/core';
import {Test} from '../app.test'

@Component({
  selector: 'app-widget-notepad',
  templateUrl: './widget-notepad.component.html',
  styleUrls: ['./widget-notepad.component.scss']
})
export class WidgetNotepadComponent extends Test implements OnInit {
  isInitialized: boolean;
  textInput = '';
  config = {};
  constructor() {
    super();
   }

  ngOnInit(): void {
    super.accessFun();
    this.config = { title: 'Hello Widget', subtitle: 'hello Subtitle' }
  }

  refresh() {
    console.log('data in model while change', this.textInput);
    // if (this.isInitialized) {
    //   // start writting back only after prefs/old value have been loaded
    //   //this.setPersistedVariable('textInput', this.textInput);
    // }
  }

}
