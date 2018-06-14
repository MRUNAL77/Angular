import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  address: {
    street: string,
    city: string,
    state: string,
    pin: number
  };
  hobbies: string[];
  constructor() {
    console.log('constructor ran...');

  }

  ngOnInit() {
    this.name = 'Sam Raw';
    this.age = 23;
    this.hobbies = ['Write Code', 'Watch Movies', 'Play Cricket'];
  }

  onClick() {
      this.name = 'John Opem';
  }
}
