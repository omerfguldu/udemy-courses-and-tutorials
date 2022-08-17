import { Component, Input, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent implements OnInit {
  constructor(private accountsService: AccountsService) {}

  ngOnInit(): void {}

  @Input() inactive;
  @Input() i;

  setToActive() {
    this.accountsService.onActive({ name: this.inactive, id: this.i });
  }
}
