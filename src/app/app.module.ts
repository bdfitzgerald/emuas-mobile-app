import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { MyApp } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { PageModule } from '../pages/pages.module'
import {ComponentModule} from "../components/components.module";

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'beb0061b'
  }
};

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    BrowserModule,
    CloudModule.forRoot(cloudSettings),
    ComponentModule,
    PageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
