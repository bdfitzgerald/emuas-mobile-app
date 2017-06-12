import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MyApp } from '../app/app.component';

import { BookingItem } from './bookings/booking-item/booking-item'
import { YourBookings } from './bookings/your-bookings/your-bookings';

import { CategoryItem } from './notices/category-item/category-item'
import { NoticeItem } from './notices/notice-item/notice-item'
import { NewNotices } from './notices/new-notices/new-notices';

import { EventAdd } from './events/event-add/event-add'
import { EventItem } from './events/event-item/event-item'
import { YourEvents } from './events/your-events/your-events';

import { UserItems } from './user/items/user-items';
import { UserFilter } from './user/filter/user-filter';

import { AttendingModal } from './modals/attending/attending-modal';
import { NoticeAdd } from './notices/notice-add/notice-add';

@NgModule({
  declarations: [
    YourBookings,
    NoticeAdd,
    NewNotices,
    UserItems,
    UserFilter,
    AttendingModal,
    YourEvents,
    EventItem,
    EventAdd,
    BookingItem,
    CategoryItem,
    NoticeItem
  ],
  imports: [
    IonicModule.forRoot(MyApp),
  ],
  exports: [
    YourBookings,
    NoticeAdd,
    NewNotices,
    UserItems,
    UserFilter,
    AttendingModal,
    YourEvents,
    BookingItem,
    EventItem,
    EventAdd,
    CategoryItem,
    NoticeItem
  ],
  entryComponents: [
    YourBookings,
    NewNotices,
    UserFilter,
    AttendingModal,
    YourEvents,
    EventAdd,
    NoticeAdd
  ]
})
export class ComponentModule {}
