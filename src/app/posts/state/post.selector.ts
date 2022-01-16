import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Post } from "src/app/models/post.model";
import { AppState } from "src/app/state/app.state";
import { PostState } from "./post.state";

const postFeatureSelector =createFeatureSelector<PostState>('posts');
export const postSelector =createSelector(postFeatureSelector,state=>{
    return state;
});

export const getPostByIdSelector =createSelector(postFeatureSelector,(state:PostState,props:{id:number})=>{
    let post =state.posts.find(x=>x.id===+props.id);
    return post;
});