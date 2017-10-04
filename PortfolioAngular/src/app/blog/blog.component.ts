import { Component, OnInit } from '@angular/core';
import { BlogService } from './models/blog.service';
import { dynamicSort } from './models/sort';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  name: string;
  posts = [];
  constructor(private _test: BlogService) { }

  ngOnInit() {
    this._test.current_user()
    .then(data => {
      if (data.name !== undefined) {
        this.name = data.name;
      }
    });
    this._test.RetrievePost().then(data => {
      this.posts = data;
      this.posts.sort(dynamicSort('-createdAt'));
    });
  }
  logout() {
    this._test.log_out();
  }

}
