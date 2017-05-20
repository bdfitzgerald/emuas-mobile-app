import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { MyApp } from './app.component';

import { Login } from '../pages/login/login';
import { Dashboard } from '../pages/dashboard/dashboard';
import { Events } from '../pages/events/events';
import { Notices } from '../pages/notices/notices';
import { Bookings } from '../pages/bookings/bookings';
import { Users } from '../pages/users/users';
import { EventsSingle } from "../pages/events-single/events-single";
import { NoticesSingle } from "../pages/notices-single/notices-single";

import { YourBookings } from "../components/bookings/your-bookings/your-bookings";
import { NewNotices } from "../components/notices/new-notices/new-notices";
import { YourEvents } from "../components/events/your-events/your-events";

import { UserItems } from "../components/user/items/user-items";

import { AttendingModal } from "../components/modals/attending/attending-modal";
import { UserModal } from "../components/modals/user/user-modal";

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'BEB0061B'
  }
};

@NgModule({
  declarations: [
    MyApp,
    Login,
    Dashboard,
    Events,
    EventsSingle,
    NoticesSingle,
    Notices,
    Bookings,
    YourBookings,
    NewNotices,
    UserItems,
    Users,
    AttendingModal,
    UserModal,
    YourEvents
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Login,
    Dashboard,
    Events,
    EventsSingle,
    NoticesSingle,
    Notices,
    Bookings,
    YourBookings,
    NewNotices,
    UserItems,
    Users,
    AttendingModal,
    UserModal,
    YourEvents
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
