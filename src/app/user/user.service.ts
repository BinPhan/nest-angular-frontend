import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }

  getListUser() {
    return this.http.get('http://localhost:3000/customer-informations')
  }

  editUser(id: number, body: any) {
    return this.http.put('http://localhost:3000/customer-informations/' + id, { body })
  }
}
