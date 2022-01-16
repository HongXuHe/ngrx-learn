import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCounterSlector } from 'src/app/counter/state/counter.selector';
import { CounterState } from 'src/app/models/counter-state.model';
import { Post } from 'src/app/models/post.model';
import { AppState } from 'src/app/state/app.state';
import { postSelector } from '../state/post.selector';
import { PostState } from '../state/post.state';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
posts$?:Observable<PostState>
  constructor(private store:Store<AppState>,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
   this.posts$ = this.store.select(postSelector);
  }
  onEditPost(post:Post) {
    this.router.navigate(['posts/edit',post.id])
  }
}
