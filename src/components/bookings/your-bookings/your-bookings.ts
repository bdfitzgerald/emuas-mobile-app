import { Component } from '@angular/core';

/*
  Generated class for the DashboardBookings component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
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
          startDate: '8th May, 2017',
          endDate: '8th May, 2017'
        },
        flying: {
          startDate: '9th May, 2017',
          endDate: '9th May, 2017'
        },
        mt: {
          from: {
            date: '8th May',
            time: 'Afternoon',
            loc: 'Loughborough'
          },
          to: {
            date: '9th May',
            time: 'Afternoon',
            loc: 'Cranwell'
          }
        }
      },
      {
        title: 'Hockey',
        group: true,
        accom: {
          startDate: '8th May, 2017',
          endDate: '8th May, 2017'
        },
        mt: {
          from: {
            date: '8th May',
            time: 'Afternoon',
            loc: 'Loughborough'
          },
          to: {
            date: '10th May',
            time: 'Afternoon',
            loc: 'Cranwell'
          }
        }
      }
    ]
  }
}
