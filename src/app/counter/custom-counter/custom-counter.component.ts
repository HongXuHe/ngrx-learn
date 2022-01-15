import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { onChangeChannelName, onCustomeIncrementAction } from '../state/counter.action';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.css']
})
export class CustomCounterComponent implements OnInit {
 incrementBy:number =1;
 channelName:string ='my channel name';
  constructor(private store:Store<{counter:CounterState}>) { }

  ngOnInit(): void {
    
    this.store.select('counter')
    .subscribe(data=>{
      console.log('channel name change called');
      this.channelName =data.channelName
    })
  }
  onCustomIncrement() {
    this.store.dispatch(onCustomeIncrementAction({value:+this.incrementBy}));
  }
  onChangeChannelName(){
    this.store.dispatch(onChangeChannelName());
  }
}
