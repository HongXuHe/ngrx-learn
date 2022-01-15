import { createAction, props } from "@ngrx/store";
import { PostState } from "./post.state";

const modifyPostActionType ='[Post Page] Edit Post';
export const onModifyPostAction =createAction(modifyPostActionType,props<{posts:PostState}>());