import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ComponentModule } from '../components/components.module';
import { MyApp } from '../app/app.component';

import { Login } from '../pages/login/login';
import { Dashboard } from '../pages/dashboard/dashboard';
import { Events } from '../pages/events/events';
import { Notices } from '../pages/notices/notices';
import { Bookings } from '../pages/bookings/bookings';
import { UserSingle } from './users/user-single/user-single';
import { Users } from '../pages/users/users';
import { EventNew } from './events/event-new/event-new';
import { EventsSingle } from './events/events-single/events-single';
import { NoticesSingle } from './notices/notices-single/notices-single';
import { Category } from './notices/category/category';
import { NoticeNew } from './notices/notice-new/notice-new';

@NgModule({
  declarations: [
    Login,
    Dashboard,
    Events,
    EventsSingle,
    NoticesSingle,
    Notices,
    Bookings,
    UserSingle,
    Users,
    Category,
    NoticeNew,
    EventNew
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    ComponentModule
  ],
  exports: [
    Login,
    Dashboard,
    Events,
    EventsSingle,
    NoticesSingle,
    Notices,
    Bookings,
    UserSingle,
    Users,
    Category,
    NoticeNew,
    EventNew
  ],
  bootstrap: [],
  entryComponents: [
    Login,
    Dashboard,
    Events,
    EventsSingle,
    NoticesSingle,
    Notices,
    Bookings,
    UserSingle,
    Users,
    Category,
    NoticeNew,
    EventNew
  ]
})
export class PageModule {}
