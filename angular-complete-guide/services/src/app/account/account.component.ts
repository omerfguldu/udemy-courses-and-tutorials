import { Component, OnInit, Input } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService],
})
export class AccountComponent implements OnInit {
  constructor(
    private loggingService: LoggingService,
    private accountsService: AccountsService
  ) {}

  ngOnInit(): void {}

  @Input() account;
  @Input() id: number;

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);
  }
}
