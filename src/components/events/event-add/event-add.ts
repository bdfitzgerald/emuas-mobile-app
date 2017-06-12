import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';

import { EventNew } from '../../../pages/events/event-new/event-new';

@Component({
  selector: 'event-add',
  templateUrl: 'event-add.html'
})
export class EventAdd {

  text: string;

  constructor( public navCtrl: NavController, public navParams: NavParams, public appCtrl: App ) { }

  newEvent() {
    this.appCtrl.getRootNav().push(EventNew)
  }

}
