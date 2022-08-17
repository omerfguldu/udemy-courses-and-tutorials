import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  users = [
    {
      id: 1,
      username: 'omerfguldu',
      password: '123',
    },
    {
      id: 2,
      username: 'user',
      password: 'user',
    },
    {
      id: 3,
      username: 'a',
      password: 'a',
    },
  ];
}
