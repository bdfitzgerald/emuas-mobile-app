import { Component } from '@angular/core';

/*
  Generated class for the UserModal component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'user-modal',
  templateUrl: 'user-modal.html'
})
export class UserModal {

  text: string;

  constructor() {
    console.log('Hello UserModal Component');
    this.text = 'Hello World';
  }

}
