import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight, faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faUser = faUser;
  faChevronRight = faChevronRight;
  faLock = faLock;
  usernameValue: string = '';
  passwordValue: string = '';
  constructor(
    private usersService: UsersService,
    public authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onLogin() {
    this.usersService.users.forEach((user) => {
      if (
        user['username'] === this.usernameValue &&
        user['password'] === this.passwordValue
      ) {
        this.authService.loggedUsername = user['username'];
        this.authService.login();
        this.router.navigate([`${this.usernameValue}/cards`]);
        console.log(this.usernameValue);
      }
    });
  }
}
