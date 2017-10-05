import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog/models/blog.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  name: string;
  isIn = false;   // store state
  toggleState() { // click handler
      const bool = this.isIn;
      this.isIn = bool === false ? true : false;
  }
  constructor(private _blog: BlogService) { }

  ngOnInit() {
    this._blog.current_user().then(
      data => {
        if (data.name !== undefined) {
          this.name = data.name;
        }
    });
  }
}
