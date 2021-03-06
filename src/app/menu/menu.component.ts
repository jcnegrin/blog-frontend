import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  logged = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    const logged = this.authService.getSessionToken();
    if (logged !== undefined) {
      this.logged = true;
    }
  }

}
