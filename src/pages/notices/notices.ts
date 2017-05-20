import { Component } from '@angular/core';

import { ModalController } from 'ionic-angular';

@Component({
  selector: 'page-notices',
  templateUrl: 'notices.html'
})
export class Notices {

  notices: any;
  notice: any

  constructor( public modalCtrl: ModalController) {

    this.notices = [
      {id: 1, title: 'Planes', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', type: 'Flying', user: 'Matt Roper'},
      {id: 2, title: 'Skiing', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', type: 'AT', user: 'GTI'},
      {id: 3, title: 'More Planes', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', type: 'Flying', user: 'Liam Osbiston'},
      {id: 4, title: 'Freedom Of The City', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', type: 'General', user: 'Josh Smullen'},
      {id: 5, title: 'STRIKE', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', type: 'FD', user: 'Tom Dixon'},
    ];

  }

}
