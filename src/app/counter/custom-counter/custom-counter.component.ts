import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterState } from 'src/app/models/counter-state.model';
import { onChangeChannelName, onCustomeIncrementAction } from '../state/counter.action';
import { getChannerlNameSelector } from '../state/counter.selector';


@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.css']
})
export class CustomCounterComponent implements OnInit {
 incrementBy:number =1;
 channelName$?: Observable<string>;
  constructor(private store:Store<{counter:CounterState}>) { }

  ngOnInit(): void {
    
    this.channelName$ =this.store.select(getChannerlNameSelector);
  }
  onCustomIncrement() {
    this.store.dispatch(onCustomeIncrementAction({value:+this.incrementBy}));
  }
  onChangeChannelName(){
    this.store.dispatch(onChangeChannelName());
  }
}
