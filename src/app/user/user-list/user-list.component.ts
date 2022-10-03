import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserListService } from './user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnChanges {

  @Input() users: Array<any> = []

  @Output() deleteUser = new EventEmitter()
  constructor(
    private userListService: UserListService,
    private fb: FormBuilder
  ) {
  }

  userForm = new FormArray(this.users)
  formUsers = this.fb.array<FormGroup>([])

  ngOnInit(): void {



    // this.userListService.getListUser().subscribe((res: any) => this.users = res)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    changes['users'].currentValue.forEach((element: any) => {
      this.formUsers.push(
        new FormGroup({
          name: new FormControl(element.name, Validators.required),
          username: new FormControl(element.username),
          email: new FormControl(element.email),
          gender: new FormControl(element.gender),
          birthday: new FormControl(element.birthday),
        })
      )
    });

    console.log(this.formUsers.at(1));
  }

  goToEdit(id: number, realID: number) {
    this.users[id].editing = !this.users[id].editing

    if (!this.users[id].editing) {
      console.log(this.formUsers.value);

      console.log(realID);

      console.log(this.users[id]);
    }
  }

  delete(id: number) {
    this.deleteUser.emit(id)
  }

}
