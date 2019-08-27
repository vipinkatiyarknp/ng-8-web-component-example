import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AnalyticsCounterComponent } from './analytics-counter/analytics-counter.component';

@NgModule({
declarations: [AnalyticsCounterComponent],
imports: [BrowserModule],
entryComponents: [AnalyticsCounterComponent]
})
export class AppModule {

constructor(private injector: Injector) {
    const analyticsCounter = createCustomElement(AnalyticsCounterComponent, { injector });
    customElements.define('analytics-counter', analyticsCounter);
}
ngDoBootstrap() {}
} 