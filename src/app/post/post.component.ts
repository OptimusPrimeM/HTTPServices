import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  private _posts: any[];
  private _url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) {
    http.get(this.url)
      .subscribe(response => {
        this._posts = response.json();
      });
  }

  get posts() {
    return this._posts;
  }

  get url() {
    return this._url
  }

  createPost(input: HTMLInputElement) {

    let post = { title: input.value };
    this.http.post(this.url, JSON.stringify(post))
      .subscribe((response) => {
        post['id'] = response.json().id;
        this.posts.unshift(post);
        console.log(response.json());
      });


  }

}
