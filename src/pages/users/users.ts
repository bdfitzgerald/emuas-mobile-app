import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { UserFilter } from '../../components/user/filter/user-filter';

@Component({
  selector: 'page-members',
  templateUrl: 'users.html'
})
export class Users {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController ) {

  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(UserFilter);
    popover.present({
      ev: myEvent
    });
  }

}
