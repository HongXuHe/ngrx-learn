import { createReducer, on } from "@ngrx/store";
import { Post } from "src/app/models/post.model";
import { onAddPostAction, onDeletePostAction, onModifyPostAction } from "./post.action";
import { postStateInit } from "./post.state";

export const _postReducer = createReducer(postStateInit,
    on(onModifyPostAction, (state,action) =>{
        let postEdited =state.posts.map(x=>{
           return x.id===action.post.id ? action.post:x
        });
        return {
            ...state,
           posts:postEdited
        };
    }),
    on(onAddPostAction,(state,action)=>{
        const post ={...action.post};
        post.id =state.posts.length +1;
        return {
            ...state,
            posts:[post,...state.posts]
        };
    }),
    on(onDeletePostAction,(state,action) =>{
        let posts =state.posts.filter(p=>p.id !==action.post.id);
        return {
            ...state,
            posts:posts
        };
    })
    )