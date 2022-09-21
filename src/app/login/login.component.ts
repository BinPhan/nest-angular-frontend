import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credentials = {
    userName: '',
    password: ''
  }

  loginForm = new FormGroup({
    userName: new FormControl(this.credentials.userName,
      Validators.required,
    ),
    password: new FormControl(this.credentials.password,
      Validators.required
    )
  })

  constructor(
    private loginService: LoginService,

  ) { }

  async login() {

    console.log(this.loginForm);

    if (this.loginForm.valid) {
      await this.loginService.login(this.loginForm.value)
    }
  }

  ngOnInit(): void {
  }

}
