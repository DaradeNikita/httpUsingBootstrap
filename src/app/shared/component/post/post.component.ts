import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ipost } from '../../models/post';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
postId! : string;
postObj !: Ipost;
deleteId!: string;
deletedObj! : Ipost;
arrcatg :Array<string> = ['food','nature','birthday','sparrow','love']
  constructor(private _postService : PostService, private _routes : ActivatedRoute,
    private _router : Router) { }

  ngOnInit(): void {
    this._routes.params
      .subscribe((params : Params) =>{
         this.postId = params['postId'];
        //  console.log(this.postId);
        if(this.postId){
          this._postService.getpost(this.postId)
          .subscribe((res : Ipost) =>{
              // console.log(res);
         this.postObj = res;
          })
        }
    })  
 }

 get getCatg(){
  return this.arrcatg[Math.floor(Math.random() *4)]
}

 postDelete(){
  this._routes.params
    .subscribe((params : Params) =>{
      this.deleteId = params['postId']
      console.log(this.deleteId);
      this._postService.deletePost(this.deleteId)
      .subscribe(res =>{
        console.log(res);
        // this.deletedObj = res
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: false,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          }else{
            title : 'Cancle'
          }
        });
        this._router.navigate(['posts'])
      })
   })
  }
}
