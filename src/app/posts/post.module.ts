import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { _counterReducer } from "../counter/state/counter.reducer";
import { AddPostComponent } from "./add-post/add-post.component";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { PostListComponent } from "./post-list/post-list.component";
import { PostRoutingModule } from "./post-routing.module";

@NgModule({
    declarations:[
        PostListComponent,
        AddPostComponent,
        EditPostComponent],
    imports:[
       //StoreModule.forFeature('counter',_counterReducer),
        ReactiveFormsModule,
        CommonModule,

        PostRoutingModule,
    ],
    exports:[]
})
export class PostModule{

}