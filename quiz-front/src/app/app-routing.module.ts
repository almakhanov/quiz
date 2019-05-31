import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import {PostsComponent} from './posts/posts.component';
import {PostByIdComponent} from './post-by-id/post-by-id.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'posts/:pk', component: PostByIdComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
