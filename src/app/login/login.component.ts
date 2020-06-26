import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LoginService } from './login.service';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email = new FormControl('');
  public password = new FormControl('');

  constructor(private loginService: LoginService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  async login() {
    try {
      if (this.email && this.password) {
        const response: any = await this.loginService.login({email: this.email.value, password: this.password.value});
        const { token } = response;
        this.authService.setSessionToken(token);
        this.router.navigate(['/blog']);
      }
    } catch (error) {

    }
  }

}
