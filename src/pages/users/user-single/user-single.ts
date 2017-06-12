import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-user',
  templateUrl: 'user-single.html',
})
export class UserSingle {

  user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = navParams.data;
  }

}
