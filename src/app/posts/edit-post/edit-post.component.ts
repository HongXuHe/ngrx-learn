import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { AppState } from 'src/app/state/app.state';
import { onModifyPostAction } from '../state/post.action';
import { getPostByIdSelector, postSelector } from '../state/post.selector';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit, OnDestroy {

  formPost:FormGroup
  postId?:number;
  editPost?:Post;
  postSub?:Subscription;
  constructor(private store:Store<AppState>,
              private route:ActivatedRoute) {
    this.formPost =new FormGroup({
      'id':new FormControl(null),
      'title':new FormControl('',[Validators.required,Validators.minLength(2)]),
      'description':new FormControl('',[Validators.required,Validators.minLength(2)])
    }
    )
   }

  ngOnInit(): void {
 
    this.route.params.subscribe((params: Params) => {
     this.postId = params['id'];
     if(this.postId){
    this.postSub =  this.store.select(getPostByIdSelector,{id:this.postId}).subscribe(data=>{
        if(data !== undefined && data ){
          this.editPost =data;
          this.formPost.get('title')?.setValue(this.editPost.title);
          this.formPost.get('description')?.setValue(this.editPost.description);
          this.formPost.get('id')?.setValue(this.editPost.id);
        }
        
      });
    }
    });
  }
  ngOnDestroy(): void {
      if(this.postSub){
        this.postSub.unsubscribe();
      }
  }


  getTitleControlError() {
    let titleControl = this.formPost.get('title');
    if(titleControl?.touched && titleControl.getError('required')){
      return 'title is required';
    }
    if(titleControl?.touched && titleControl.getError('minlength')){
      return 'minimum length is 2';
    }
    return null;
  }
  getDescriptionControlError() {
    let descControl = this.formPost.get('description');
    if(descControl?.touched && descControl.getError('required')){
      return 'description is required';
    }
    if(descControl?.touched && descControl.getError('minlength')){
      return 'minimum length is 2';
    }
    return null;
  }
  onSave() {
    let editedPost:Post ={id:this.formPost.value.id,title:this.formPost.value.title,description:this.formPost.value.description};
   this.store.dispatch(onModifyPostAction({post:editedPost}));
  }

}
