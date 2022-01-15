import { _counterReducer } from "../counter/state/counter.reducer";
import { counterInitialState } from "../counter/state/counter.state";
import { CounterState } from "../models/counter-state.model";
import { _postReducer } from "../posts/state/post.reducer";
import { PostState, postStateInit } from "../posts/state/post.state";

export interface AppState{
    counter:CounterState,
    posts:PostState,
}

export const appStateInit:AppState ={
    counter:counterInitialState,
    posts:postStateInit
}

export const appReducer ={
    counter:_counterReducer,
    posts:_postReducer
}
