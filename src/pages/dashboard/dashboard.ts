import { Component } from '@angular/core';

import { YourBookings } from '../../components/bookings/your-bookings/your-bookings'
import { NewNotices } from '../../components/notices/new-notices/new-notices'
import { YourEvents } from '../../components/events/your-events/your-events'

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class Dashboard {

  noticesPage: any;
  eventsPage: any;
  bookingsPage: any;

  constructor() {
    this.noticesPage = NewNotices;
    this.eventsPage = YourEvents;
    this.bookingsPage = YourBookings;
  }

}

