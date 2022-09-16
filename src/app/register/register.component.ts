import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  loginForm = new FormGroup({
    name: new FormControl(''),
    userName: new FormControl(''),
    password: new FormControl('')
  })

  regS: RegisterService

  constructor(registerService: RegisterService) {
    this.regS = registerService
  }

  login() {
    console.log(this.loginForm.value);
  }

  addUser() {
    console.log(this.loginForm.value);

    this.regS.addUser(this.loginForm.value)


  }

  ngOnInit(): void {
    // console.log(this.regS);
  }

}
