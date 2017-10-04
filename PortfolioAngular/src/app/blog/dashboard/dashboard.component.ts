import { Component, OnInit } from '@angular/core';
import { BlogService } from '../models/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  name: string;
  constructor(private _blog: BlogService, private _router: Router) { }

  ngOnInit() {
    this._blog.current_user()
    .then(data => {
      if (data !== false) {
        this.name = data.name;
      }else {
        this._router.navigateByUrl('/blog');
      }
    });
  }

}
