import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // numbers = [1, 2, 3, 4, 5];
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];
  onlyOdd = false;
  value = 5;
  currentStyles = {
    'font-style': 'italic',
    'font-size': '18px',
    color: 'blueviolet',
  };
  buttonText = 'Hide';
  displayedText = true;
  highlightColor = 'lightgreen';
  condition = false;

  inputChange(event: Event) {
    this.currentStyles.color = (event.target as HTMLInputElement).value;
  }

  displayText() {
    this.displayedText = !this.displayedText;
    this.buttonText = this.buttonText === 'Hide' ? 'Show' : 'Hide';
  }

  changeColor(event: Event) {
    this.highlightColor = (event.target as HTMLInputElement).value;
  }

  onChangeCondition() {
    this.condition = !this.condition;
  }
}
