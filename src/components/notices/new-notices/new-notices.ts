import { Component } from '@angular/core';

@Component({
  selector: 'new-notices',
  templateUrl: 'new-notices.html'
})
export class NewNotices {

  notices: any;

  constructor() {
    this.notices = [
      {title: 'Planes', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', type: 'Flying', user: 'Matt Roper', created: '27th June', comments: 3, views: 99},
      {title: 'Skiing', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', type: 'AT', user: 'GTI', created: '29th June', comments: 0, views: 24},
      {title: 'More Planes', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', type: 'Flying', user: 'Liam Osbiston', created: '30th June', comments: 1, views: 45},
    ];


  }

}
