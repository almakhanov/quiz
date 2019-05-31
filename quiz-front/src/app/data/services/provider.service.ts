import {EventEmitter, Injectable} from '@angular/core';
import {MainService} from './main.service';
import {HttpClient} from '@angular/common/http';
import {IPost} from '../model';

@Injectable({
  providedIn: 'root'
})
export class ProviderService extends MainService {

  constructor(http: HttpClient) {
    super(http);
  }

  getPosts(): Promise<IPost[]> {
    return this.get('http://localhost:8000/api/posts', {});
  }

  createPost(id: number, title: string, body: string): Promise<IPost> {
    return this.post('http://localhost:8000/api/posts', {
        id, title, body
    });
  }

  ///////////////////////////////////////////////////////////////////////////

  getPostDetail(id: number): Promise<IPost> {
    return this.get(`http://localhost:8000/api/posts/${id}`, {});
  }

  updatePostDetail(post: IPost) {
    return this.put(`http://localhost:8000/api/posts/${post.id}`, {
      title: post.title,
      body: post.body
    });
  }

  removePost(id: number): Promise<any> {
    return this.delet(`http://localhost:8000/api/posts/${id}`, {});
  }

  likePost(id: number): Promise<IPost> {
    return this.post(`http://localhost:8000/api/posts/${id}/like`, {});
  }
}
