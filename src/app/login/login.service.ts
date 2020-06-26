import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../shared/services/auth.service';
import { CONFIG } from '../config';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(data: any) {
    return this.http.post(`${CONFIG.API_URL}/users/login`, data).toPromise();
  }

}
