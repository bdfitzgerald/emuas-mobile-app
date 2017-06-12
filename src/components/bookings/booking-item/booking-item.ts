import { Component, Input } from '@angular/core';

@Component({
  selector: 'booking-item',
  templateUrl: 'booking-item.html'
})
export class BookingItem {

  @Input() booking: any;

  constructor() {
  }

}
