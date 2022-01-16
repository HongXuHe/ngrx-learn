import { createReducer, on } from "@ngrx/store";
import { Post } from "src/app/models/post.model";
import { onAddPostAction, onModifyPostAction } from "./post.action";
import { postStateInit } from "./post.state";

export const _postReducer = createReducer(postStateInit,
    on(onModifyPostAction, (state,action) =>{
        return {
            ...state
        };
    }),
    on(onAddPostAction,(state,action)=>{
        const post ={...action.post};
        post.id =state.posts.length +1;
        return {
            ...state,
            posts:[post,...state.posts]
        };
    })
    )