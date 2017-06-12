import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-notices-single',
  templateUrl: 'notices-single.html'
})
export class NoticesSingle {

  notice: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.notice = navParams.data;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoticesSinglePage');
  }

}
