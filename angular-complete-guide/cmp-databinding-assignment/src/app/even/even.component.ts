import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css'],
})
export class EvenComponent implements OnInit, OnChanges {
  @Input() arrivalNumber: number;
  numbersArray = [];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.arrivalNumber % 2 === 0)
      this.numbersArray.push(this.arrivalNumber);
  }
}
