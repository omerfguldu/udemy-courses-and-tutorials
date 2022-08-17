import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  @Output() incrementNumberEvent = new EventEmitter<number>();
  interval;
  startNumber = 0;

  onStartGame(value: number) {
    this.interval = setInterval(() => {
      this.incrementNumberEvent.emit(value++);
      this.startNumber = value;
    }, 1000);
  }

  onStopGame() {
    clearInterval(this.interval);
  }
}
