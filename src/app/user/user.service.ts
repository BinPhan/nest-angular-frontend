import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }

  getListUser(query?: any) {
    if (!query || !query?.page) {
      query = { page: 1 }
    }
    if (!query.limit) {
      query.limit = 5
    }

    return this.http.get('http://localhost:3000/customer-informations?page=' + query.page + '&size=' + query.limit)
  }

  editUser(id: number, body: any) {
    return this.http.put('http://localhost:3000/customer-informations/' + id, { body })
  }

  addUser(body: any) {
    delete body.confirmPassword
    let fData = new FormData()
    fData.append('name', body.name)
    fData.append('username', body.username)
    fData.append('email', body.email)
    fData.append('password', body.password)
    fData.append('gender', body.gender)
    fData.append('birthday', body.birthday)
    fData.append('phone', body.phone)
    fData.append('avatar', body.file)
    console.log(fData);

    return this.http.post('http://localhost:3000/customer-informations/', fData)
  }

  deleteUser(id: number) {
    return this.http.delete('http://localhost:3000/customer-informations/' + id)
  }
}
