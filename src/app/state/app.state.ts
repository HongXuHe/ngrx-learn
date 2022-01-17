import { _authReducer } from "../Auth/state/auth.reducer";
import { AuthState, authStateInit } from "../Auth/state/auth.state";
import { _counterReducer } from "../counter/state/counter.reducer";
import { counterInitialState } from "../counter/state/counter.state";
import { CounterState } from "../models/counter-state.model";
import { _postReducer } from "../posts/state/post.reducer";
import { PostState, postStateInit } from "../posts/state/post.state";

export interface AppState{
    counter:CounterState,
    posts:PostState,
    auth:AuthState
}

export const appStateInit:AppState ={
    counter:counterInitialState,
    posts:postStateInit,
    auth:authStateInit
}

export const appReducer ={
    counter:_counterReducer,
    posts:_postReducer,
    auth:_authReducer
}
