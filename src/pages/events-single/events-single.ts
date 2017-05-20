import { Component, Input } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

import { ModalController } from 'ionic-angular';
import { AttendingModal } from '../../components/modals/attending/attending-modal';

@Component({
  selector: 'page-events-single',
  templateUrl: 'events-single.html'
})
export class EventsSingle {

  event: any;
  attending: any;
  calendar: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public toastCtrl: ToastController) {

    this.event = navParams.data;

  }

  showAttending(id) {
  this.attending = [
    {user: 'Off Cdt Fitzgerald'},
    {user: 'Off Cdt Thomas'},
    {user: 'Off Cdt Dixon'},
    {user: 'Off Cdt Hill'},
    {user: 'Off Cdt Lloyd'},
    {user: 'Off Cdt Robins'},
    {user: 'Off Cdt Cutbill'},
    {user: 'Off Cdt Thornton'},
    {user: 'Off Cdt Edmunds'},
    {user: 'Off Cdt Shardlow'},
  ];
    console.log(this.attending);

    let modal = this.modalCtrl.create(AttendingModal, this.attending);
    modal.present();
  }

  addToCalendar() {
    this.calendar = true;
    let toast = this.toastCtrl.create({
      message: 'Event Added to Calendar',
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }



}
