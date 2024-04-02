import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostDashBoardComponent } from './shared/component/post-dash-board/post-dash-board.component';
import { PostComponent } from './shared/component/post/post.component';
import { PageNotFoundComponent } from './shared/component/page-not-found/page-not-found.component';
import { PostFormComponent } from './shared/component/post-form/post-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './shared/component/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    PostDashBoardComponent,
    PostComponent,
    PageNotFoundComponent,
    PostFormComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
