import { createAction, props } from "@ngrx/store";
import { CounterState } from "./counter.state";

const incrementActionType ='[CounterPage] Increment';
const decrementActionType ='[CounterPage] Decrement';
const resetActionType ='[CounterPage] Reset';

export const onIncrementAction =createAction(incrementActionType);
export const onDecrementAction=createAction(decrementActionType);
export const onResetAction =createAction(resetActionType);