import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONFIG } from '../config';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Promise<any> {
    return this.http.get(`${CONFIG.API_URL}/posts`).toPromise();
  }

}

