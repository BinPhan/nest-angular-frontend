import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { confirmPassword } from 'src/app/common/validators/confirm-password.directive';

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

  @Input() modalDisplay: boolean = false

  @Output() closeModalP = new EventEmitter()
  @Output() addUser = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    this.closeModalP.emit(false)
  }

  submit() {
    this.user.markAllAsTouched()
    console.log(this.user);

    if (this.user.valid) {
      this.addUser.emit({ file: this.fileUpload, ...this.user.value })
      // this.user.reset({
      //   gender: "0"
      // })
      this.closeModalP.emit(false)
    }
  }

  changeImage(event: any) {
    const reader = new FileReader()
    reader.onload = e => this.imagePreview = reader.result
    reader.readAsDataURL(event.target.files[0])
    this.fileUpload = event.target.files[0]
  }

}
