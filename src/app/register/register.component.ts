import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  firstName = new FormControl('');
  lastName = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');

  constructor(private registerService: RegisterService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  async signup() {
    if (this.firstName || this.lastName || this.email || this.password) {
      const userData = {
        first_name: this.firstName.value,
        last_name: this.lastName.value,
        email: this.email.value,
        password: this.password.value
      };
      const token = await this.registerService.signup(userData);
      this.authService.setSessionToken(token);
      this.router.navigate(['/blog']);
    }
  }

}
