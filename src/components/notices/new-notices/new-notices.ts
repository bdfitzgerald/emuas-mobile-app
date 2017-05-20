import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';

import { NoticesSingle } from '../../../pages/notices-single/notices-single';

@Component({
  selector: 'new-notices',
  templateUrl: 'new-notices.html'
})
export class NewNotices {

  notices: any;
  notice: any;

  constructor( public navCtrl: NavController, public navParams: NavParams, public appCtrl: App ) {

    this.notices = [
      {id: 1, title: 'Planes', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', type: 'Flying', user: 'Matt Roper'},
      {id: 2, title: 'Skiing', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', type: 'AT', user: 'GTI'},
      {id: 3, title: 'More Planes', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', type: 'Flying', user: 'Liam Osbiston'},
    ];

  }

  viewNotice(id) {
    this.notice = this.notices[id];
    this.appCtrl.getRootNav().push(NoticesSingle, this.notice)
  }

}
