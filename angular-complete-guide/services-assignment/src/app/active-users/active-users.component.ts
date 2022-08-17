import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent {
  constructor(private accountsService: AccountsService) {}
  @Input() active;
  @Input() i;

  setToInactive() {
    this.accountsService.onInactive({ name: this.active, id: this.i });
  }
}
