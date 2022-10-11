import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { confirmPassword } from 'src/app/common/validators/confirm-password.directive';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  user = new FormGroup({
    name: new FormControl('', Validators.required),
    username: new FormControl(),
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
    gender: new FormControl("0"),
    birthday: new FormControl(),
    phone: new FormControl(),
    avatar: new FormControl()
  }, { validators: confirmPassword })

  imagePreview: any

  fileUpload: any

  @Output() fetch = new EventEmitter()

  modalDisplay: boolean = false

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.modalDisplay = false
  }

  submit() {
    this.user.markAllAsTouched()
    console.log(this.user);

    if (this.user.valid) {
      this.addUser({ file: this.fileUpload, ...this.user.value })
      // this.user.reset({
      //   gender: "0"
      // })
      this.modalDisplay = false
    }
  }

  changeImage(event: any) {
    const reader = new FileReader()
    reader.onload = e => this.imagePreview = reader.result
    reader.readAsDataURL(event.target.files[0])
    this.fileUpload = event.target.files[0]
  }

  openModal() {
    this.modalDisplay = true
  }

  addUser(user: any) {
    this.userService.addUser(user).subscribe({
      next: (res) => {
        this.fetch.emit()
      },
      error: (error) => {
        console.warn(error);
      }
    })
  }

}
