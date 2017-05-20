import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'bookings',
  templateUrl: 'bookings.html'
})
export class Bookings {
  bookings: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.bookings = [
      { title: 'Flying',
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
      { title: 'Hockey',
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
