import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {User} from './models/User';
import {NavigationEnd, Router} from '@angular/router';
import {UserService} from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  public appPages = [
    {
      title: "Fil d'actualité",
      url: '/annonce',
      icon: 'home'
    },
    {
      title: 'Profile',
      url: '/home',
      icon: 'person'
    },
    {
      title: 'Déconnexion',
      url: '/login',
      icon: 'log-out'
    },
  ];
  public appPagess = [
    {
      title: 'Inscription',
      url: '/form',
      icon: 'person-add'
    },
    {
      title: 'Connexion',
      url: '/login',
      icon: 'log-in'
    }
  ];

  user: User;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private userService: UserService
  ) {


    this.router.events.subscribe(event => {
      this.user = new User();
      if (event instanceof NavigationEnd) {
        if ( router.url.indexOf('/login') !== -1 || router.url.indexOf('/form') !== -1) {
          this.user = new User();
          this.user.email = undefined;
          localStorage.removeItem('token');
        }
        this.userService.getUser().subscribe(r => {this.user = r;  this.initializeApp();});
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
