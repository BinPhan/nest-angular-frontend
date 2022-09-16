import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private loginService: LoginService) { }

  async login() {

    console.log(this.loginForm.value);

    await this.loginService.login(this.loginForm.value)
  }

  ngOnInit(): void {
  }

}
