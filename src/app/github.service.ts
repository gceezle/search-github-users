import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username: string;
  private client_id = '2730375dfdd46c93687a';
  private client_secret = '9001691b0a1e4b5dfc59e5bd1c68ab688e7bc479';
  
  constructor(private _http: Http) {
    console.log('Github service on point!!');
    this.username = 'gceezle';
   }

   getUser(){
        return this._http
        .get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map(res => res.json());
   }

   getRepos(){
        return this._http
        .get('https://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map(res => res.json());
   }

   updateUser(username:string){
      this.username = username;
   }

}
