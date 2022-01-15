import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { onCustomeIncrementAction } from '../state/counter.action';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.css']
})
export class CustomCounterComponent implements OnInit {
 incrementBy:number =1;
  constructor(private store:Store<{counter:CounterState}>) { }

  ngOnInit(): void {
  }
  onCustomIncrement() {
    this.store.dispatch(onCustomeIncrementAction({value:+this.incrementBy}));
  }

}
