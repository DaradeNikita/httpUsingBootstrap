import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Ipost } from '../../models/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
postArray :Array<Ipost>= [];
  constructor(private _postService :PostService) { }

  ngOnInit(): void {
    this._postService.getAllPost()
    .subscribe(res =>{
      console.log(res);
      this.postArray =res
    })
  }

}
