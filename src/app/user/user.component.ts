import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IdService } from '../common/service/id.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  user: Array<any> = []
  constructor(
    private userService: UserService,
    private fb: FormBuilder
  ) { }

  formUsers = this.fb.array<FormGroup>([])

  modalDisplay = false

  ngOnInit(): void {
    this.fetch()
  }

  fetch() {
    this.userService.getListUser().subscribe((res: any) => {
      this.user = res.customers
      this.formUsers.clear()
      res.customers.forEach((element: any) => {
        this.formUsers.push(
          new FormGroup({
            name: new FormControl(element.name),
            username: new FormControl(element.username),
            email: new FormControl(element.email),
            gender: new FormControl(element.gender),
            birthday: new FormControl(element.birthday),
          })
        )
      });
    })
  }

  openModal() {
    this.modalDisplay = true

  }

  closeModal(e: any) {
    this.modalDisplay = e
  }

  addUser(user: any) {

    this.userService.addUser(user).subscribe({
      next: (res) => this.fetch(),
      error: (error) => {
        console.warn(error);

      }
    })
    this.user.push(user)
  }

  deleteUser(id: any) {

    this.user = this.user.filter(item => { return item.id !== id })
  }

  quickAdd() {
    this.user.push({
      // id: this.idS.getID(),
      name: "123",
      username: "123",
      email: "123@123.com",
      password: "123",
      confirmPassword: "123",
      gender: "1",
      birthday: "2022-09-29",
    })
  }
}
