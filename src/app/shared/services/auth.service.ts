import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getSessionToken() {
    return sessionStorage.getItem('authorization');
  }

  setSessionToken(auth: string) {
    sessionStorage.setItem('authorization', auth);
  }

  setAuthorization(token: string) {
    document.cookie = `authorization=${token}`;
  }

  getAuthorizationToken() {
    const name = 'authorization=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }
}
