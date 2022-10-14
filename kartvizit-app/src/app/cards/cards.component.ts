import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  constructor() {}

  cardUsers = [
    {
      name: 'Omer Faruk Guldu',
      title: 'Frontend Developer',
      tel: '+90 505 685 14 55',
      mail: 'omer@gmail.com',
      address: 'Istanbul, TURKEY',
    },
    {
      name: 'Omer Faruk Guldu',
      title: 'Frontend Developer',
      tel: '+90 505 685 14 55',
      mail: 'omer@gmail.com',
      address: 'Istanbul, TURKEY',
    },
  ];

  ngOnInit(): void {}
}
