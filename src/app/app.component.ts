import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';
import { UserService } from './user.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   users$: Observable<User[]>;

  constructor(private userService: UserService) {}

  /*lets to create my own observable
  we need import Observable */
  public simpleObservable = new Observable(observer => {
    /*observable execution*/
    observer.next(Math.random());
    observer.complete();
  });

  mySubject = new Subject();

  ngOnInit() {
    /*return userSubject as a abservable
    this.user$ automatically detect changes and update, this data is
    directly render and update to the view with async pipe,
    we can subscribe to Observable as well with subscribe method */

    this.users$ = this.userService.getUsers();
    this.userService.loadDummyData();
    //subscribe 1
    this.simpleObservable.subscribe(data => {
      console.log(data);
    });
    //subscribe2
    this.simpleObservable.subscribe(data => {
      console.log(data);
    });


    //subject
    //subscriber 1
    this.mySubject.subscribe(data => {
      console.log(data);
    });
    //subscriber 2
    this.mySubject.subscribe(data => {
      console.log(data);
    });
    this.mySubject.next(Math.random());
  }

  createUser(user: User) {
    this.userService.createNewUser(user);
  }

  approveAll() {
    this.userService.approveAll();
  }
}
