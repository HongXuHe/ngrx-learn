import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostState } from "./post.state";

const postFeatureSelector =createFeatureSelector<PostState>('posts');
export const postSelector =createSelector(postFeatureSelector,state=>{
    return state;
});