import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  default : any = [
    {
      title : "Home",
      url   : "home",
      icon  : "home"
    },
    {
      title : "Categories",
      url   : "categories",
      icon  : "apps"
    },
    {
      title : "Favorites",
      url   : "favorites",
      icon  : "star"
    },
    {
      title : "Cart",
      url   : "cart",
      icon  : "cart"
    },
  ];

  categories :any = [
    {
      title : "Appetizers",
      url   : "appetizers",
      icon  : "folder"
    },
    {
      title : "Salads",
      url   : "salads",
      icon  : "folder"
    },
    {
      title : "Sides",
      url   : "sides",
      icon  : "folder"
    },
    {
      title : "Desserts",
      url   : "desserts",
      icon  : "folder"
    },
    {
      title : "Main Course",
      url   : "main-course",
      icon  : "folder"
    },
  ];

  news : any = [
    {
      title : "Articles",
      url   : "",
      icon  : "list"
    },
    {
      title : "Wordpress",
      url   : "",
      icon  : "logo-wordpress"
    },
    {
      title : "Drupal",
      url   : "",
      icon  : "water"
    },
  ];

  facebook :any = [
    {
      title : "Events",
      url   : "",
      icon  : "calendar"
    },
    {
      title : "Albums",
      url   : "",
      icon  : "albums"
    },
    {
      title : "Posts",
      url   : "posts",
      icon  : "book"
    },
  ];

  other :any = [
    {
      title : "Contact Us",
      url   : "contactus",
      icon  : "information-circle"
    },
    {
      title : "Map",
      url   : "map",
      icon  : "map"
    },
  ];


  public getUrl(item: string){}

}
