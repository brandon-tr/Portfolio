import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { RegisterComponent } from './blog/register/register.component';
import { LoginComponent } from './blog/login/login.component';
import { MenuComponent } from './menu/menu.component';
import { EqualValidator } from './blog/models/EqualValidator';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BlogService } from './blog/models/blog.service';
import { DashboardComponent } from './blog/dashboard/dashboard.component';
import { AddPostComponent } from './blog/dashboard/add-post/add-post.component';
import { DeletePostComponent } from './blog/dashboard/delete-post/delete-post.component';
import { PostService } from './blog/dashboard/add-post/models/post.service';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { PostsComponent } from './blog/posts/posts.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    RegisterComponent,
    LoginComponent,
    MenuComponent,
    EqualValidator,
    DashboardComponent,
    AddPostComponent,
    DeletePostComponent,
    PostsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    LazyLoadImageModule
  ],
  providers: [BlogService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
