import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login';
import { BlogService } from '../models/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logins = new Login();
  check;
  validate;
  constructor(private _login: BlogService, private _router: Router) { }

  ngOnInit() {
    while (this.validate === undefined) {
      this.validate = prompt('Please enter the access code to register');
    }
    this._login.ValidateRegister(this.validate)
    .then(data => {
      if (data === false) {
        this._router.navigateByUrl('/blog');
      }
    });
  }

  Login() {
    this._login.Login(this.logins)
    .then(data => {
      if (data.status === true) {
        this._router.navigateByUrl('/blog');
      }else {
        this.check = data;
      }
    });
  }
}
