import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent implements OnInit {
  @Input() cardItem!: Card;

  constructor() {}

  ngOnInit(): void {}
}
