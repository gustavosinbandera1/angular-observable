import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() users: User;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onCreateUser: EventEmitter<any> = new EventEmitter();
// tslint:disable-next-line: no-output-on-prefix
  @Output() onApproveAll: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  createUser() {
    this.onCreateUser.emit({
      name: 'prueba',
      email: 'prueba@gmail.com',
      registration: 'May 11, 2016',
      isPremium: false
    });
  }

  approveAll() {
    this.onApproveAll.emit();
  }

}
