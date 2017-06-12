import { Component, Input } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

import { EventsSingle } from '../../../pages/events/events-single/events-single';
import { AttendingModal } from '../../modals/attending/attending-modal'

@Component({
  selector: 'event-item',
  templateUrl: 'event-item.html'
})
export class EventItem {

  @Input() event: any;

  constructor( public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public appCtrl: App ) {
  }

  viewEvent() {
    this.appCtrl.getRootNav().push(EventsSingle, this.event)
  }

  showAttending() {
    this.event.attend = [
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

    let modal = this.modalCtrl.create(AttendingModal, this.event.attend);
    modal.present();
  }

}
