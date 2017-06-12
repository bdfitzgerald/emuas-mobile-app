import { Component } from '@angular/core';

@Component({
  selector: 'page-notices',
  templateUrl: 'notices.html'
})
export class Notices {

  categories: any;

  constructor() {

    this.categories = [
      {name: "General Notices", description: "This is a short description", icon: "text", color: "primary", new: 0, posts: 22 },
      {name: "Sports", description: "This is a short description", icon: "football", color: "secondary", new: 2, posts: 8 },
      {name: "Flying", description: "This is a short description", icon: "jet", color: "", new: 1, posts: 4 },
      {name: "Force Development", description: "This is a short description", icon: "compass", color: "success", new: 0, posts: 8 },
      {name: "Ents", description: "This is a short description", icon: "beer", color: "warning", new: 5, posts: 7 }
    ]

  }

}
