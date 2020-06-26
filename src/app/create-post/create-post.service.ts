import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONFIG } from '../config';

@Injectable({
  providedIn: 'root'
})
export class CreatePostService {

  constructor(private http: HttpClient) { }

  async createPost(post: any) {
    try {
      const create = await this.http.post(`${CONFIG.API_URL}/posts/`, post).toPromise();
      return create;
    } catch (error) {
      console.log(error);
    }
  }

  getPostMediaSignedURL() {
    return this.http.get(`${CONFIG.API_URL}/posts/signed-url`).toPromise();
  }

  /* uploadImage(url: string) {
    return this.http.put(url, )
  } */
}
