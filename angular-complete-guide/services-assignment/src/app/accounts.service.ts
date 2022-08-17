import { CounterService } from './counter.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AccountsService {
  constructor(private counterService: CounterService) {}
  activeUsers = ['Omer', 'Cafer', 'Metin'];
  inactiveUsers = ['Faruk', 'Taha', 'Ahmet'];

  onInactive(value) {
    this.inactiveUsers.push(value.name);
    this.activeUsers.splice(value.id, 1);
    this.counterService.incrementActiveToInactive();
  }

  onActive(value) {
    this.activeUsers.push(value.name);
    this.inactiveUsers.splice(value.id, 1);
    this.counterService.incrementInactiveToActive();
  }
}
