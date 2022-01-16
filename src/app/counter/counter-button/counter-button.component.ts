import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from 'src/app/models/counter-state.model';
import { AppState } from 'src/app/state/app.state';
import { onDecrementAction, onIncrementAction, onResetAction } from '../state/counter.action';


@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent implements OnInit {
 

  constructor(private store:Store<AppState>) { }

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
