import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(body: Object) {
    this.http.post('http://localhost:3000/auth/login', body).subscribe((res: any) => {

      localStorage.setItem('access_token', res.access_token)
    })
  }
}
