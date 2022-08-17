import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  styles: [
    `
      h3 {
        color: dodgerblue;
      }
    `,
  ],
})
export class AppComponent {
  items = ['apple', 'banana', 'coconut'];
  arrivalItem = '';
  a = 'banana';

  sendItem(event) {
    this.arrivalItem = event.target.innerText;
  }

  addItem(item: string) {
    this.items.push(item);
  }
}
