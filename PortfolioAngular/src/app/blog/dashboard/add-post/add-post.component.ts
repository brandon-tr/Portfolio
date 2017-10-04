import { Component, OnInit } from '@angular/core';
import { PostService } from './models/post.service';
import { Post } from './models/post';
import { Router } from '@angular/router';
import { BlogService } from '../../models/blog.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  posts = new Post();
  constructor(private _post: PostService, private _blog: BlogService, private _router: Router) { }

  ngOnInit() {
    this._blog.current_user()
    .then(data => {
      if (data === false) {
        this._router.navigateByUrl('/blog');
      }
    });
  }

  Post() {
    this._post.Post(this.posts);
    this.posts = new Post();
  }
}
