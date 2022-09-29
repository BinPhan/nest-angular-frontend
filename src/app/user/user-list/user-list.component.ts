import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormArray } from '@angular/forms';
import { UserListService } from './user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnChanges {

  @Input() users: Array<any> = []

  @Output() deleteUser = new EventEmitter()
  constructor(private userListService: UserListService) {
  }

  userForm = new FormArray(this.users)

  ngOnInit(): void {
    // this.userListService.getListUser().subscribe((res: any) => this.users = res)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

  }

  goToEdit(id: number) {
    this.users[id].editing = !this.users[id].editing

    if (!this.users[id].editing) {
      console.log(this.users[id]);
    }
  }

  delete(id: number) {
    this.deleteUser.emit(id)
  }

}
