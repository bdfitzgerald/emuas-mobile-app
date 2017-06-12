import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Content } from 'ionic-angular';

@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})

export class Category {

  @ViewChild(Content) content: Content;
  category: any;
  notices: any;
  event: any;
  initNotices: any;
  newNotices: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.category = navParams.data;
    this.notices = [
      {title: 'Planes', message: 'bit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', user: 'Matt Roper', created: '27th June', comments: 3, views: 99, unread: true},
      {title: 'Skiing', message: 'of Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', user: 'GTI', created: '29th June', comments: 0, views: 24, unread: false},
      {title: 'Hockey', message: 'this Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', user: 'Liam Osbiston', created: '30th June', comments: 1, views: 45, unread: true},
      {title: 'Football', message: 'message Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', user: 'Matt Roper', created: '27th June', comments: 3, views: 99, unread: true},
      {title: 'Cornwall', message: 'test Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', user: 'GTI', created: '29th June', comments: 0, views: 24, unread: false},
      {title: 'AFD', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', user: 'Liam Osbiston', created: '30th June', comments: 1, views: 45, unread: false},
    ];

    this.initNotices = this.notices;
    this.newNotices = this.notices;
  }

  initialNotices() {
    this.notices = this.initNotices;
  }

  doInfinite(infiniteScroll) {
    setTimeout(() => {
      this.notices = this.notices.concat(this.newNotices);
      this.initNotices = this.notices;
      infiniteScroll.complete();
    }, 500)
  }

  getNotices(ev: any) {

    this.content.scrollToTop();
    this.initialNotices();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.notices = this.notices.filter((notice) => {
        return (notice.title.toLowerCase().indexOf(val.toLowerCase()) > -1 || notice.message.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
