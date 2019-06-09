import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private userService: UserService, private router: Router) { }
  cred  = {
    username: '',
    password: ''
  };
  login() {
    this.userService.login(this.cred).subscribe(r => {localStorage.setItem('token', 'Bearer ' +  r.token); this.router.navigateByUrl('/annonce');  });
  }
  ngOnInit() {
    localStorage.removeItem('token');

  }

}
