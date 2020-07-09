import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { WidgetNotepadComponent } from './widget-notepad/widget-notepad.component';
import {WWidgetComponent} from './w-widget/w-widget.component';
import { TestcompComponent } from './testcomp/testcomp.component'

@NgModule({
  declarations: [
    WidgetNotepadComponent,
    WWidgetComponent,
    TestcompComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  entryComponents: [WidgetNotepadComponent,WWidgetComponent,TestcompComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    const el = createCustomElement(TestcompComponent, { injector });
    customElements.define('w-test', el);

  }
  ngDoBootstrap() {}
}
