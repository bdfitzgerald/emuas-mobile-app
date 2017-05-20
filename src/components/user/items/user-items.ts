import { Component, Input } from '@angular/core';

/*
  Generated class for the UserItem component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'user-items',
  templateUrl: 'user-items.html'
})
export class UserItems {

  @Input() users: any;

  constructor( ) {
    console.log(this.users);
  }

}
