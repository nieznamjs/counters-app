import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountersComponent } from './features/counters/counters.component';
import { CounterComponent } from './features/counters/counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    CountersComponent,
    CounterComponent,
  ],
  imports: [
    BrowserModule,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
