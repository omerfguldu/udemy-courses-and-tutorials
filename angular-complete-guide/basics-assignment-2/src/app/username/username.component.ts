import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css'],
})
export class UsernameComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  userName: string = '';
  empty = true;

  isEmpty(event: any) {
    event.target.value == '' ? (this.empty = true) : (this.empty = false);
  }
  resetInput() {
    this.userName = '';
    this.empty = true;
  }
}
