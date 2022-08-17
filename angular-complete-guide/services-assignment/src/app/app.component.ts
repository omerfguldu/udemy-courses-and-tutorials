import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AccountsService } from './accounts.service';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CounterService],
})
export class AppComponent implements OnInit {
  constructor(private accountsService: AccountsService) {}
  activeUsers;
  inactiveUsers;
  ngOnInit(): void {
    this.activeUsers = this.accountsService.activeUsers;
    this.inactiveUsers = this.accountsService.inactiveUsers;
  }
}
