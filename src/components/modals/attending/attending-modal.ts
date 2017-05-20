import { Component } from '@angular/core';

import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import { UserItems } from "../../user/items/user-items";

@Component({
  selector: 'attending-modal',
  templateUrl: 'attending-modal.html'
})
export class AttendingModal {

  users: any;
  event: any;

  constructor( public params: NavParams, public platform: Platform, public viewCtrl: ViewController, public modalCtrl: ModalController ) {

    this.users = this.params.data;
    console.log(this.params);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
