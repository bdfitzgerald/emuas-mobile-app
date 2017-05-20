import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

import { EventsSingle } from '../../../pages/events-single/events-single';
import { AttendingModal } from '../../modals/attending/attending-modal';

@Component({
  selector: 'your-events',
  templateUrl: 'your-events.html'
})

export class YourEvents {
  events: any;
  event: any;
  attending: any;

  constructor( public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public appCtrl: App ) {
    this.events = [
      { title: 'Freedom of the City', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', name: 'APO Smullen', date: '18th - 22rd April, 2017', attending: '36', submitted: '11h', attend: true, created: false },
      { title: 'Cornwall Exped', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', name: 'Off Cdt Thomas', date: '25th - 30th June, 2017', attending: '25', submitted: '36h', attend: true, created: true },
      { title: 'Strike', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', name: 'Off Cdt Dixon', date: '1st - 10th July, 2017', attending: '14', submitted: '2d', attend: false, created: false }
    ]


  }

  viewEvent(id) {
    this.event = this.events[id];
    this.appCtrl.getRootNav().push(EventsSingle, this.event)
  }

  showAttending(id) {
    this.event = this.events[id];
    this.attending = [
      {name: 'Off Cdt Fitzgerald'},
      {name: 'Off Cdt Thomas'},
      {name: 'Off Cdt Dixon'},
      {name: 'Off Cdt Hill'},
      {name: 'Off Cdt Lloyd'},
      {name: 'Off Cdt Robins'},
      {name: 'Off Cdt Cutbill'},
      {name: 'Off Cdt Thornton'},
      {name: 'Off Cdt Edmunds'},
      {name: 'Off Cdt Shardlow'},
    ];

    let modal = this.modalCtrl.create(AttendingModal, this.attending);
    modal.present();
  }
}
