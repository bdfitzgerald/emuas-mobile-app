import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { FileChooser } from '@ionic-native/file-chooser';

@Component({
  selector: 'page-notice-new',
  templateUrl: 'notice-new.html',
})
export class NoticeNew {

  @Input() title: string;
  @Input() category: string;
  @Input() message: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fileChooser: FileChooser ) {
  }

  addFile() {
    this.fileChooser.open()
      .then(uri => console.log(uri))
      .catch(e => console.log(e));
  }

}
