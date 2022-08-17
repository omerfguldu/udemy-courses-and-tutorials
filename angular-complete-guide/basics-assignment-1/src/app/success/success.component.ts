import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  template: ` <p><strong>This is a SUCCESS text</strong></p> `,
  styles: [
    `
      p {
        color: green;
      }
    `,
  ],
})
export class SuccessComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
