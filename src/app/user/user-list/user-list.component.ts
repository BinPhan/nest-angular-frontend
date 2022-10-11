import { Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { UserService } from '../user.service';
import { UserListService } from './user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnChanges {

  @Input() users: Array<any> = []

  @Output() deleteUser = new EventEmitter()
  @Output() fetch = new EventEmitter()

  constructor(
    private userListService: UserListService,
    private userService: UserService,
    private fb: FormBuilder
  ) {
  }

  modalDisplay: boolean = false

  formUsers = this.fb.array<FormGroup>([])

  deleteID: number = 0

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {

    this.formUsers = this.fb.array<FormGroup>([])
    changes['users'].currentValue.forEach((element: any) => {
      this.formUsers.push(
        new FormGroup({
          name: new FormControl(element.name),
          username: new FormControl(element.username),
          email: new FormControl(element.email),
          gender: new FormControl(element.gender),
          birthday: new FormControl(element.birthday),
          phone: new FormControl(element.phone),
        })
      )
    });

  }

  goToEdit(id: number, realID: number) {
    if (this.formUsers.valid) {

      this.users[id].editing = !this.users[id].editing

      if (!this.users[id].editing) {

        this.userListService.editUser(realID, this.formUsers.at(id).value).subscribe(
          {
            next: (res) => {
              this.fetch.emit()
            },
            error: (error) => {
              console.warn(error);

            }
          }
        )
      }
    }
  }

  save(id: number, realID: number) {
    this.users[id].editing = !this.users[id].editing

    if (!this.users[id].editing) {

      this.userListService.editUser(realID, this.formUsers.at(id).value).subscribe(
        {
          next: (res) => {
            this.fetch.emit()
          },
          error: (error) => {
            console.warn(error);
          }
        }
      )
    }
  }

  delete(id: number) {
    this.modalDisplay = true
    this.deleteID = id
  }

  confirmDelete(deleteID: number) {
    this.userService.deleteUser(deleteID).subscribe(res => {
      this.fetch.emit({})
      this.modalDisplay = false
    }
    )
  }


  closeModal() {
    this.modalDisplay = false
  }

}
