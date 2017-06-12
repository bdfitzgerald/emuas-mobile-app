import { Component, Input } from '@angular/core';

import { NavController, NavParams, App } from 'ionic-angular';

import { Category } from '../../../pages/notices/category/category';

@Component({
  selector: 'category-item',
  templateUrl: 'category-item.html'
})
export class CategoryItem {

  @Input() category: any;

  constructor( public navCtrl: NavController, public navParams: NavParams, public appCtrl: App ) {

  }
  viewCategory() {
    this.appCtrl.getRootNav().push(Category, this.category)
  }

}
