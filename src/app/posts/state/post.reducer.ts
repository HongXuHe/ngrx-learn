import { createReducer, on } from "@ngrx/store";
import { onModifyPostAction } from "./post.action";
import { postStateInit } from "./post.state";

export const _postReducer = createReducer(postStateInit,
    on(onModifyPostAction, (state,action) =>{
        return {
            ...state
        };
    }))