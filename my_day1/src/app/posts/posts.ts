import { Component, OnInit } from '@angular/core';
import { Ipost } from '../models/post.model';
import { Post } from '../services/post';

@Component({
  selector: 'app-posts',
  standalone: false,
  templateUrl: './posts.html',
  styleUrls: ['./posts.css'] 
})
export class Posts implements OnInit {
  showform: boolean = false;
  posts: Ipost[] = [];
  commentMap: { [key: string]: string } = {};

  newpost: Ipost = {
    title: '',
    body: '',
    userid: 0,
    date: new Date(),
    imgurl: '',
    like: true,
    likes: 0,
    comments: []
  };

  constructor(private postService: Post) {}

  ngOnInit(): void {
    this.loadposts();
  }

  toggleForm() {
    this.showform = !this.showform;
  }

  loadposts() {
    this.postService.getposts().subscribe(posts => {
      this.posts = posts.map(post => ({
        ...post,
        date: new Date(post.date),
        comments: post.comments ?? [] 
      }));
    });
  }

  addpost() {
    this.postService.addposts(this.newpost).subscribe(() => {
      this.loadposts();
      this.resetForm();
    });
  }

  removepost(id: string) {
    if (!id) return;
    this.postService.deletePost(id).subscribe(() => {
      this.loadposts();
    });
  }

  likecounter(post: Ipost) {
    post.like = true;
    post.likes += 1;
    this.postService.updatePost(post).subscribe();
  }

  addcomment(post: Ipost) {
    const commentText = this.commentMap[post._id!];
    if (commentText && commentText.trim() !== '') {
      post.comments.push(commentText.trim());
      this.commentMap[post._id!] = '';
      this.postService.updatePost(post).subscribe();
    }
  }

  resetForm() {
    this.newpost = {
      title: '',
      body: '',
      userid: 0,
      date: new Date(),
      imgurl: '',
      like: false,
      likes: 0,
      comments: []
    };
    this.showform = false;
  }
  convertToDate(date: string | Date): Date {
  return new Date(date);
}

}
