import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {



  private _posts: any[];


  constructor(private service: PostService) { }

  ngOnInit(): void {
    this.service.getPost()
      .subscribe(
        response => {
          this._posts = response.json();
        },

        error => {
          console.log(error);
        });
  }

  get posts() {
    return this._posts;
  }

  createPost(input: HTMLInputElement) {

    let post = { title: input.value };
    this.service.createPost(post)
      .subscribe(
        response => {
          post['id'] = response.json().id;
          this.posts.unshift(post);
          // console.log(response .json());
        },
        (error: Response) => {

          if (error.status === 400) {
            // console.log(error);
          }

        });


  }

  updatePost(post) {
    this.service.updatePost(post)
      .subscribe(
        response => {
          console.log(response.json());
        },
        error => {
          console.log(error);
        });
  }

  deletePost(post) {
    this.service.deletePost(post.id)
      .subscribe(
        response => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        (error: Response) => {

          if (error.status === 404) {
            console.log("This post has already been deleted");
          } else {
            alert("An unexpected error occured!");
            console.log(error);
          }

        });
  }

}
