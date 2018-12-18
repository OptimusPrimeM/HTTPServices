import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private _url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { }

  getPost() { return this.http.get(this.url) }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post))
  }

  updatePost(post) {
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({
      isUpdate: true
    }));
  }

  deletePost(id) {
    return this.http.delete(this.url + '/' + id, id);
  }

  get url() { return this._url }
}
