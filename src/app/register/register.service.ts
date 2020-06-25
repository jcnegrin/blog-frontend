import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CONFIG } from '../config';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  signup(data): Promise<any>{
    return this.http.post(CONFIG.API_URL + '/users/signup', data).toPromise();
  }
}
