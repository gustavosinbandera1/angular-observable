import {BehaviorSubject, Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from './user';

export const DUMMY_DATA = [
  {
    name: 'John Lilki',
    registration: 'September 14, 2013',
    email: 'jhlilk22@yahoo.com',
    isPremium: true
  },
  {
    name: 'Jamie Harington',
    registration: 'January 11, 2014',
    email: 'jamieharingonton@yahoo.com',
    isPremium: true
  },
  {
    name: 'Jill Lewis',
    registration: 'May 11, 2014',
    email: 'jilsewris22@yahoo.com',
    isPremium: true
  }
];

@Injectable()

export class UserService {
  private userSubject = new BehaviorSubject([]);
  private users: User[];

  constructor() { }

  getUsers(): Observable<User[]> {
    return this.userSubject.asObservable();
  }

  private refresh() {
    /*emitir los nuevos valores para que los que dependan se actualicen*/
    this.userSubject.next(this.users);
  }

  createNewUser(user: User) {
    /*Evitar hacer this.user.push() pues estariamos modificando los valores
    directamente !!se debe generar un nuevo array!! */
    this.users = [...this.users, user];
    this.refresh();
  }

  loadDummyData() {
    this.users = DUMMY_DATA;
    this.refresh();
  }

    approveAll() {
      this.users = this.users.map(user => Object.assign({}, user, {isPremium: true}));
      this.refresh();
    }
}
