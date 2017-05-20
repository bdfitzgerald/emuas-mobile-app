import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';

import { EventsSingle } from '../../pages/events-single/events-single';

@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class Events {
  type: string = "attending";
  events: any;
  event: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public appCtrl: App) {
    this.events = [
      { title: 'Freedom of the City', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', user: 'APO Smullen', date: '18th - 22rd April, 2017', attending: '36', submitted: '11h', attend: true, created: false },
      { title: 'Cornwall Exped', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', user: 'Off Cdt Thomas', date: '25th - 30th June, 2017', attending: '25', submitted: '36h', attend: true, created: true },
      { title: 'Strike', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', user: 'Off Cdt Dixon', date: '1st - 10th July, 2017', attending: '14', submitted: '2d', attend: false, created: false }
    ]


  }

  viewEvent(id) {
    this.event = this.events[id];
    this.appCtrl.getRootNav().push(EventsSingle, this.event)
  }
}
