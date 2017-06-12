import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';

import { NoticeNew } from '../../../pages/notices/notice-new/notice-new';

@Component({
  selector: 'notice-add',
  templateUrl: 'notice-add.html'
})
export class NoticeAdd {

  constructor( public navCtrl: NavController, public navParams: NavParams, public appCtrl: App ) { }

  newNotice() {
    this.appCtrl.getRootNav().push(NoticeNew)
  }

}
