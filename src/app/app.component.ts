import { Component, ViewChild } from '@angular/core';
import { Nav, Platform  } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Auth, User } from '@ionic/cloud-angular';

import { Login } from '../pages/login/login';
import { Dashboard } from '../pages/dashboard/dashboard';
import { Events } from '../pages/events/events';
import { Notices } from '../pages/notices/notices';
import { Bookings } from '../pages/bookings/bookings';
import { Users } from '../pages/users/users';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public auth: Auth, public user: User ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: Dashboard },
      { title: 'Notices', component: Notices },
      { title: 'Events', component: Events },
      { title: 'Bookings', component: Bookings },
      { title: 'Members', component: Users }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      if(!this.auth.isAuthenticated()) {
        Splashscreen.hide();
        this.rootPage = Login;
      } else {
        Splashscreen.hide();
        this.rootPage = Dashboard;
      }
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout() {
    console.log("logout");
    this.auth.logout();
    this.nav.setRoot(Login);
  }
}
