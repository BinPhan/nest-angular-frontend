import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { of } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  user: Array<any> = []
  data: any = {}
  constructor(
    private userService: UserService,
    private fb: FormBuilder
  ) { }


  modalDisplay = false

  ngOnInit(): void {
    this.fetch()
  }

  fetch(query?: any) {
    this.userService.getListUser(query).pipe().subscribe({
      next: (res: any) => {
        this.user = res.customers.data
        this.data = res.customers
      },
      error: (error) => { },
      complete: () => { },
    })
  }

  closeModal(e: any) {
    this.modalDisplay = e
  }

  addUser(user: any) {
    this.userService.addUser(user).subscribe({
      next: (res) => {
        this.fetch()
      },
      error: (error) => {
        console.warn(error);
      }
    })
  }


}
