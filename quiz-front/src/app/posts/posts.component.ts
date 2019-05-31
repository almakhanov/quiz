import { Component, OnInit } from '@angular/core';
import {IPost} from '../data/model';
import {ProviderService} from '../data/services/provider.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public posts: IPost[] = [];

  constructor(
    private provider: ProviderService
  ) { }

  ngOnInit() {
    this.provider.getPosts().then(res => {
      this.posts = res;
    });
  }

}
