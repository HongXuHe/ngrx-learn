
import { createReducer, on } from "@ngrx/store";
import { onChangeChannelName, onCustomeIncrementAction, onDecrementAction, onIncrementAction, onResetAction } from "./counter.action";
import { counterInitialState, CounterState } from "./counter.state";

export const _counterReducer =createReducer(counterInitialState,
    on(onIncrementAction,(state)=>{
        console.log('increment called');
        return{
            ...state,
            counter:state.counter+1
        }
    }
    ),
    on(onDecrementAction,(state)=>{
        return {
            ...state,
            counter:state.counter-1
        };
    }),

    on(onResetAction,(state)=>{
        return {
            ...state,
            counter:0
        }
    }),
    on(onCustomeIncrementAction,(state,action)=>{
        return {
            ...state,
            counter: state.counter+ action.value
        }
    }),
    on(onChangeChannelName,(state)=>{
        return {
            ...state,
            channelName:'update change my channel name'
        }
    })
    
    )