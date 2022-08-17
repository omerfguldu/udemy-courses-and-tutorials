import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css'],
})
export class InputOutputComponent {
  @Input() value: string;
  @Output() sendItem = new EventEmitter<string>();

  addItem(value: string) {
    this.sendItem.emit(value);
  }
}
