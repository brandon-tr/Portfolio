import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class BlogService {
  constructor(private _http: Http, private _router: Router) { }

  Register(user) {
    return this._http.post('/register_user', user)
      .map(data => data.json())
      .toPromise();
  }
  Login(user) {
    return this._http.post('/validate_user', user)
      .map(data => data.json())
      .toPromise();
  }
  current_user() {
    return this._http.get('/current_user')
      .map(data => data.json())
      .toPromise();
  }
  log_out() {
    this._http.get('/log_out').toPromise();
  }
  RetrievePost() {
    return this._http.get('/getPost').map(data => data.json()).toPromise();
  }
  ValidateRegister(code) {
    code = {code: code};
    return this._http.post('/validate', code).map(data => data.json()).toPromise();
  }
  findPost(title) {
    title = {title: title};
    return this._http.post('/findPost', title).map(data => data.json()).toPromise();
  }
}
