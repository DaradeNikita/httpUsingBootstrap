import { Component, OnInit } from '@angular/core';
import { Ipost } from '../../models/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-dash-board',
  templateUrl: './post-dash-board.component.html',
  styleUrls: ['./post-dash-board.component.scss']
})
export class PostDashBoardComponent implements OnInit {
postArry ! : Array<Ipost>
  constructor(private _postService : PostService) { }

  ngOnInit(): void {
    this._postService.getAllPost()
       .subscribe(res =>{
        this.postArry = res
        console.log(this.postArry);
        })
  }



}
