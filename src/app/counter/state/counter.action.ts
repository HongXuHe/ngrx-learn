import { createAction, props } from "@ngrx/store";


const incrementActionType ='[CounterPage] Increment';
const decrementActionType ='[CounterPage] Decrement';
const resetActionType ='[CounterPage] Reset';
const customIncrementActionType ='[CounterPage] Custom Increment';
const changeChannelNameActionType ='[CounterPage] Change Channel Name';

export const onIncrementAction =createAction(incrementActionType);
export const onDecrementAction=createAction(decrementActionType);
export const onResetAction =createAction(resetActionType);
export const onCustomeIncrementAction =createAction(customIncrementActionType,props<{value:number}>());
export const onChangeChannelName =createAction(changeChannelNameActionType);