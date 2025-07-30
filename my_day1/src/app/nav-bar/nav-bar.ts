import { Component } from '@angular/core';
import { UserService } from '../services/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: false,
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {
  constructor(public userservice: UserService, private router: Router) {}

  logout() {
    this.userservice.logout();
    this.router.navigate(['/login']);
  }

  isLoginPage(): boolean {
    return this.router.url === '/login';
  }
}
