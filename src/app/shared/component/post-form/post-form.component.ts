import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ipost } from '../../models/post';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
editForm! : FormGroup
  updateId!: string;
  isinEditMode :boolean = false;

  constructor(private _postService : PostService,
    private _routes : ActivatedRoute,
    private _router : Router) { }

  ngOnInit(): void {
    this.createEditForm();
   this.patchPost()
      
  }
 patchPost(){
  this._routes.params
  .subscribe((params : Params) =>{
    this.updateId = params['postId']
       if(this.updateId){
        this.isinEditMode=true
        this._postService.getpost(this.updateId)
        .subscribe((post : Ipost) =>{
          this.editForm.patchValue(post)
        })
      }
  })
 }

onUpdatePost(){
 if(this.editForm.valid && this.isinEditMode){
  let obj = {...this.editForm.value,id : this.updateId};
  // console.log(obj);
  this._postService.updatePost(obj)
  .subscribe((res) =>{
    console.log(res);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Post Updated successfully",
      showConfirmButton: false,
      timer: 1500
    });
   this._router.navigate(['posts'])
    this.editForm.reset()
  })
  }
}

newPostcreate(){
  console.log('event');
  
if(this.editForm.valid){
  let obj ={...this.editForm.value}
  this._postService.createPost(obj)
  .subscribe((res) =>{
   console.log(res);
   Swal.fire({
    position: "center",
    icon: "success",
    title: "Post Created successfully",
    showConfirmButton: false,
    timer: 1500
  });
   this.editForm.reset()
  this._router.navigate(['posts'])
  })
 }
}



  createEditForm(){
 this.editForm = new FormGroup({
  title : new FormControl(null,[Validators.required]),
  body : new FormControl(null,[Validators.required]),
  userId : new FormControl(null,[Validators.required])
 })
}
}
