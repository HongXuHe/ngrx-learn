import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { onDecrementAction, onIncrementAction, onResetAction } from '../state/counter.action';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent implements OnInit {
 

  constructor(private store:Store<CounterState>) { }

  ngOnInit(): void {
  }
  onIncrement(){
    console.log('button clicked');
    this.store.dispatch(onIncrementAction());
  }

  onDecrement(){
    this.store.dispatch(onDecrementAction());
  }

  onReset(){
    this.store.dispatch(onResetAction());
  }

}
