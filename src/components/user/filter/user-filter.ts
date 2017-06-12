import { Component } from '@angular/core';

/**
 * Generated class for the UserFilter component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'user-filter',
  templateUrl: 'user-filter.html'
})
export class UserFilter {

  text: string;

  constructor() {
    console.log('Hello UserFilter Component');
    this.text = 'Hello World';
  }

}
