import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  showDetail = true;
  countersArray = [];

  toggleDetails() {
    this.showDetail = !this.showDetail;
    // this.countersArray.push(this.countersArray.length + 1);
    this.countersArray.push(new Date());
  }
}
