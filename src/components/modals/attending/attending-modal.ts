import { Component } from '@angular/core';

import { ModalController, Platform, NavParams, ViewController, PopoverController } from 'ionic-angular';
import { UserFilter } from '../../user/filter/user-filter';

@Component({
  selector: 'attending-modal',
  templateUrl: 'attending-modal.html'
})
export class AttendingModal {

  initUsers: any;
  users: any;
  event: any;
  item: any;

  constructor( public params: NavParams, public platform: Platform, public viewCtrl: ViewController, public modalCtrl: ModalController, public popoverCtrl: PopoverController ) {

    this.users = this.params.data;
    this.initUsers = this.users;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  initialUsers() {
    this.users = this.initUsers;
  }

  getMembers(ev: any) {

    this.initialUsers();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.users = this.users.filter((user) => {
        return (user.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  presentPopover() {
    let popover = this.popoverCtrl.create(UserFilter);
    popover.present();
  }


}
