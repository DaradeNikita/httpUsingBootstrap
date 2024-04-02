import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDashBoardComponent } from './shared/component/post-dash-board/post-dash-board.component';
import { PostComponent } from './shared/component/post/post.component';
import { PageNotFoundComponent } from './shared/component/page-not-found/page-not-found.component';
import { PostFormComponent } from './shared/component/post-form/post-form.component';
import { HomeComponent } from './shared/component/home/home.component';

const routes: Routes = [
  {
    path:"",
    component : HomeComponent
  },
  {
    path:"home",
    component : HomeComponent
  },
  {
    path:"posts",
    component : PostDashBoardComponent
  },
  { 
    path :"posts/add",
    component : PostFormComponent
  },
  { 
    path :"posts/:postId",
    component : PostComponent
  },
  { 
    path :"posts/:postId/edit",
    component : PostFormComponent
  },
  {
    path : "**",
    component :PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
