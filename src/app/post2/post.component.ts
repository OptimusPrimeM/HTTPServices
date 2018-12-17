import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {



  private _posts: any[];
  private _url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) {
    
  }

  ngOnInit(): void {
    this.http.get(this.url)
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
        // console.log(response.json());
      });


  }

  updatePost(post) {
    this.http.patch(this.url + '/' + post.id, JSON.stringify({
      isUpdate: true
    }))
      .subscribe((response) => {
        console.log(response.json());
      })
  }

  deletePost(post) {
    this.http.delete(this.url + '/' + post.id, post.id)
      .subscribe((response) => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      })
  }

}
