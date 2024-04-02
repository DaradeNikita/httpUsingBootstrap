import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Ipost } from '../models/post';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  postUrl = `${environment.baseUrl}/post.json`;

  constructor(private _http : HttpClient) { }

  getAllPost():Observable<Array<Ipost>>{
 return this._http.get<Array<Ipost>>(this.postUrl)
      .pipe(
        map((res : any) =>{
      let postsArray :Array<Ipost> = [];
         for (const key in res) {
          postsArray.push({...res[key], id : key})
   };
   return postsArray
  })
)
  }

  getpost(id : string):Observable<Ipost>{
    let singlePostUrl = `${environment.baseUrl}/post/${id}.json`;
    console.log(singlePostUrl);
    
   return  this._http.get<Ipost>(singlePostUrl)
  }

  updatePost(post : Ipost):Observable<Ipost>{
   let updateUrl =  `${environment.baseUrl}/post/${post.id}.json`;
   console.log(updateUrl);
   return this._http.patch<Ipost>(updateUrl,post)
  }

  
  createPost(post : Ipost):Observable<Ipost>{
    let headers : HttpHeaders = new HttpHeaders();
    headers.append('content-type','application/json');
    headers.append('Auth','JWT')
   return this._http.post<Ipost>(this.postUrl,post,{
    headers : headers
   })
   }

   deletePost(id : string):Observable<any>{
    console.log(id);
    
    let deleteUrl = `${environment.baseUrl}/post/${id}.json`;
    console.log(deleteUrl);
    return this._http.delete<any>(deleteUrl) 
   }
}
