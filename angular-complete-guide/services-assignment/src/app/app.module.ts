import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccountsService } from './accounts.service';
import { ActiveUsersComponent } from './active-users/active-users.component';

import { AppComponent } from './app.component';
import { CounterService } from './counter.service';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';

@NgModule({
  declarations: [AppComponent, ActiveUsersComponent, InactiveUsersComponent],
  imports: [BrowserModule],
  providers: [AccountsService, CounterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
