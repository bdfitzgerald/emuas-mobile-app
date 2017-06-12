import { Component } from '@angular/core';
import { YourBookings } from '../../components/bookings/your-bookings/your-bookings'

@Component({
  selector: 'bookings',
  templateUrl: 'bookings.html'
})
export class Bookings {
  yourBookings: any;
  flyingBookings: any;
  mtBookings: any;
  groupBookings: any;

  constructor() {
    this.yourBookings = YourBookings;
    this.flyingBookings = YourBookings;
    this.mtBookings = YourBookings;
    this.groupBookings = YourBookings;
  }
}
