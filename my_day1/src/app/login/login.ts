import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginfrom: FormGroup;
  username: string = '';
  password: string = '';

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.loginfrom = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  login() {
    this.userService.login(this.username, this.password).subscribe({
      next: () => {
        console.log(" login successful");
        this.router.navigate(['/posts']);
      },
      error: () => {
        console.log(" invalid user name or password");
      }
    });
  }
}
