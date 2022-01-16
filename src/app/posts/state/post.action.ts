import { createAction, props } from "@ngrx/store";
import { Post } from "src/app/models/post.model";
import { PostState } from "./post.state";

const modifyPostActionType ='[Post Page] Edit Post';
const addPostActionType ='[Post Page] Add Post';
export const onModifyPostAction =createAction(modifyPostActionType,props<{post:Post}>());
export const onAddPostAction =createAction(addPostActionType,props<{post:Post}>());