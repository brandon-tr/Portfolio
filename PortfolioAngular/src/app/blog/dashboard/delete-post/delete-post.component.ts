import { Component, OnInit } from '@angular/core';
import { PostService } from '../add-post/models/post.service';
import { dynamicSort } from '../../models/sort';
import { Router } from '@angular/router';
import { BlogService } from '../../models/blog.service';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.css']
})
export class DeletePostComponent implements OnInit {
  posts = [];
  constructor(private _post: PostService, private _blog: BlogService, private _router: Router) { }

  ngOnInit() {
    this._blog.current_user()
    .then(data => {
      if (data === false) {
        this._router.navigateByUrl('/blog');
      }
    });
    this._post.RetrievePost().then(data => {
      this.posts = data;
      this.posts.sort(dynamicSort('-createdAt'));
    });
  }
  Delete(id) {
    this._post.DeletePost(id);
    this._post.RetrievePost().then(data => {
      this.posts = data;
      this.posts.sort(dynamicSort('-createdAt'));
    });
  }

}
