import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../data/services/provider.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-by-id',
  templateUrl: './post-by-id.component.html',
  styleUrls: ['./post-by-id.component.css']
})
export class PostByIdComponent implements OnInit {

  public id = 0;

  public post: any = {};

  constructor(
    private provider: ProviderService,
    private router: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {

    this.id = parseInt(this.router.snapshot.paramMap.get('pk'), null);

    if (this.id) {
      this.provider.getPostDetail(this.id).then(res => {
        this.post = res;
      });
    }
  }

  navigateBack() {
    this.location.back();
  }

  updatePost() {
    this.provider.updatePostDetail(this.post).then(res => {
      this.post = res;
    });
  }

  deletePost() {
    this.provider.removePost(this.post.id).then(() => {
      this.location.back();
    });
  }

  likePost() {
    this.provider.likePost(this.post.id).then(() => {
    });
  }

}
