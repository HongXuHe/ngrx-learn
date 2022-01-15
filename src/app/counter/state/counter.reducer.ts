
import { createReducer, on } from "@ngrx/store";
import { onChangeChannelName, onCustomeIncrementAction, onDecrementAction, onIncrementAction, onResetAction } from "./counter.action";
import { counterInitialState } from "./counter.state";

export const _counterReducer =createReducer(counterInitialState,
    on(onIncrementAction,(state)=>{
        
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