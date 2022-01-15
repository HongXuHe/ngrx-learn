import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "src/app/models/counter-state.model";

const getCounterState =createFeatureSelector<CounterState>('counter');

export const getCounterSlector =createSelector(getCounterState,state=>{
    return state.counter;
});

export const getChannerlNameSelector =createSelector(getCounterState,state=>{
    return state.channelName;
});