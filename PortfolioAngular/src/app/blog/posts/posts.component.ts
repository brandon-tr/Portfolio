import { Component, OnInit } from '@angular/core';
import { BlogService } from '../models/blog.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts = [];
  constructor(private _blog: BlogService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this._blog.findPost(params['title'])
      .then(data => {
        if (data === false) {
          this._router.navigateByUrl('/blog');
        }else {
          this.posts = data;
        }
      });
    });
  }

}
