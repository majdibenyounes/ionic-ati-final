import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {User} from '../models/User';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  constructor(private  router:  Router, private userService: UserService) { }
  user: User;
  register() {
    this.userService.register(this.user).subscribe(r => this.router.navigateByUrl('/login'));
  }
  ngOnInit() {
    this.user = new User();
    localStorage.removeItem('token');
  }
}
