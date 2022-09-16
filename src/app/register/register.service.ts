import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()

export class RegisterService {
  constructor(private http: HttpClient) { }

  addUser(body: Object) {
    this.http.post('http://localhost:3000/user', body, {
      headers: {
        'Content-Type': 'application/json',
      }
    }).subscribe()
  }
}
