import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PostService {

  constructor(private _http: Http) { }
  Post(post) {
    this._http.post('/post', post).map(data => data.json()).toPromise();
  }
  RetrievePost() {
    return this._http.get('/getPost').map(data => data.json()).toPromise();
  }
  DeletePost(id) {
    id = {id: id};
    this._http.post('/DeletePost', id).map(data => data.json()).toPromise();
  }

}
