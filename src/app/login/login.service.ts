import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StoreService } from '../store.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private storeService: StoreService) { }

  login(body: Object) {
    this.http.post('http://localhost:3000/auth/login', body).subscribe((res: any) => {

      this.storeService.saveUser(res)
    })
  }
}
