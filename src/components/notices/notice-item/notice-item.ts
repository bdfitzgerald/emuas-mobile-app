import { Component, Input } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';

import { NoticesSingle } from '../../../pages/notices/notices-single/notices-single';

@Component({
  selector: 'notice-item',
  templateUrl: 'notice-item.html'
})
export class NoticeItem {

  @Input() notice: any;

  constructor( public navCtrl: NavController, public navParams: NavParams, public appCtrl: App ) { }

  viewNotice() {
    this.appCtrl.getRootNav().push(NoticesSingle, this.notice)
  }
}
