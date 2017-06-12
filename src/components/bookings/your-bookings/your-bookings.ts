import { Component } from '@angular/core';

@Component({
  selector: 'your-bookings',
  templateUrl: 'your-bookings.html'
})
export class YourBookings {

  bookings: any;

  constructor() {

    this.bookings = [
      {
        title: 'Flying',
        group: false,
        accom: {
          startDate: '2017/06/08',
          endDate: '2017/06/08'
        },
        flying: {
          startDate: '2017/06/09',
          endDate: '2017/06/09'
        },
        mt: {
          from: {
            date: '2017/06/08',
            time: 'Afternoon',
            loc: 'Loughborough'
          },
          to: {
            date: '2017/06/09',
            time: 'Afternoon',
            loc: 'Cranwell'
          }
        }
      },
      {
        title: 'Hockey',
        group: true,
        accom: {
          startDate: '10/01/2015',
          endDate: '10/02/2015'
        },
        mt: {
          from: {
            date: '2017/06/08',
            time: 'Afternoon',
            loc: 'Loughborough'
          },
          to: {
            date: '2017/06/10',
            time: 'Afternoon',
            loc: 'Cranwell'
          }
        }
      }
    ]
  }
}
