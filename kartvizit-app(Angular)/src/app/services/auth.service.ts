import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn = false;
  loggedUsername: string = 'visitor';
  constructor() {}

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}
