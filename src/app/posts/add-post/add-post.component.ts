import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/post.model';
import { AppState } from 'src/app/state/app.state';
import { onAddPostAction } from '../state/post.action';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  formPost:FormGroup
  constructor(private store:Store<AppState>) {
    this.formPost =new FormGroup({
      'title':new FormControl('',[Validators.required,Validators.minLength(2)]),
      'description':new FormControl('',[Validators.required,Validators.minLength(2)])
    }
    )
   }

  ngOnInit(): void {
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
  onAddPost() {
    let newPost:Post ={id:-1,title:this.formPost.value.title,description:this.formPost.value.description};
    this.store.dispatch(onAddPostAction({post:newPost}));
    
  }
}
