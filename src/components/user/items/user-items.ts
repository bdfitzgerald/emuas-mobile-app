import { Component, Input } from '@angular/core';

import { UserSingle } from '../../../pages/users/user-single/user-single';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'user-items',
  templateUrl: 'user-items.html'
})
export class UserItems {

  @Input() user: any;

  constructor(public navCtrl: NavController) { }

  memberDetails() {
    this.navCtrl.push(UserSingle, this.user)

  }

}
