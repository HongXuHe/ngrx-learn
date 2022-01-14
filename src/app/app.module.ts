import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter/counter.component';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
import { CounterButtonComponent } from './counter/counter-button/counter-button.component';
import { StoreModule } from '@ngrx/store';
import { counterInitialState, CounterState } from './counter/state/counter.state';
import { _counterReducer } from './counter/state/counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterButtonComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({counter:_counterReducer}),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
