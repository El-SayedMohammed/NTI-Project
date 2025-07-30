import { Component, Input, OnInit } from '@angular/core';
import { Iuser } from '../models/user.model';
import { UserService } from '../services/user';

@Component({
  selector: 'app-date-user',
  standalone: false,
  templateUrl: './date-user.html',
  styleUrl: './date-user.css'
})
export class DateUser implements OnInit {
  @Input() userid!: number;
  @Input() date_create!: Date;
  user!: Iuser;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUserById(this.userid).subscribe((user: Iuser) => {
      this.user = user;
    });
  }
}
