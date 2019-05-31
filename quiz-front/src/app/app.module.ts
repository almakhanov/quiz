import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { PostsComponent } from './posts/posts.component';
import {ProviderService} from './data/services/provider.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { PostByIdComponent } from './post-by-id/post-by-id.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PostsComponent,
    PostByIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProviderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
