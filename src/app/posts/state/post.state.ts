import { Post } from "src/app/models/post.model";

export interface PostState{
    posts:Post[]
}

export const postStateInit:PostState ={
    posts:[{
        id:1,
        title:'post1',
        description:'this is post1'
    },
    {
        id:2,
        title:'post2',
        description:'this is post2'
    },]
}