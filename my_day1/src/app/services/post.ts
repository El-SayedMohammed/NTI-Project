import { Injectable } from '@angular/core';
import { Ipost } from '../models/post.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Post {
  private apiurl = 'http://localhost:3000/api/posts'; 

  constructor(private http: HttpClient) {}

  getposts(): Observable<Ipost[]> {
    return this.http.get<Ipost[]>(this.apiurl);
  }

  addposts(post: Ipost): Observable<Ipost> {
    return this.http.post<Ipost>(this.apiurl, post);
  }

  deletePost(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiurl}/${id}`);
  }

  updatePost(post: Ipost): Observable<Ipost> {
    return this.http.put<Ipost>(`${this.apiurl}/${post._id}`, post);
  }

  getPostById(id: string): Observable<Ipost> {
    return this.http.get<Ipost>(`${this.apiurl}/${id}`);
  }
}
