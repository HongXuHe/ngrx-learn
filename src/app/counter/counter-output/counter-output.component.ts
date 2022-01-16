import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterState } from 'src/app/models/counter-state.model';
import { AppState } from 'src/app/state/app.state';
import { _counterReducer } from '../state/counter.reducer';
import { getCounterSlector } from '../state/counter.selector';


@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {
counter:number =0;
counter$?:Observable<number>;
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {

    this.counter$ =this.store.select(getCounterSlector);
  }

}
