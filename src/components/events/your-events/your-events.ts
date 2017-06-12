import { Component } from '@angular/core';

@Component({
  selector: 'your-events',
  templateUrl: 'your-events.html'
})

export class YourEvents {
  events: any;
  event: any;
  attending: any;

  constructor( ) {
    this.events = [
      { title: 'Freedom of the City', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', name: 'APO Smullen', date: '18th - 22rd April, 2017', attending: '36', submitted: '11h', attend: true, created: false },
      { title: 'Cornwall Exped', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', name: 'Off Cdt Thomas', date: '25th - 30th June, 2017', attending: '25', submitted: '36h', attend: true, created: true },
      { title: 'Strike', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', name: 'Off Cdt Dixon', date: '1st - 10th July, 2017', attending: '14', submitted: '2d', attend: false, created: false }
    ]


  }
}
