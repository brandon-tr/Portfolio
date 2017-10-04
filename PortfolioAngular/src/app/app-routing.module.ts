import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { RegisterComponent } from './blog/register/register.component';
import { LoginComponent } from './blog/login/login.component';
import { DashboardComponent } from './blog/dashboard/dashboard.component';
import { AddPostComponent } from './blog/dashboard/add-post/add-post.component';
import { DeletePostComponent } from './blog/dashboard/delete-post/delete-post.component';
import { PostsComponent } from './blog/posts/posts.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'blog/post/:title', component: PostsComponent},
  {path: 'fjornkle/register', component: RegisterComponent},
  {path: 'fjornkle/login', component: LoginComponent},
  {path: 'blog/check/dashboard', component: DashboardComponent},
  {path: 'blog/check/dashboard/add-post', component: AddPostComponent},
  {path: 'blog/check/dashboard/delete-post', component: DeletePostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
