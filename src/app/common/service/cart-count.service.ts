import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, observable, Observable, retry, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartCountService {

  set = 0

  totalCart = 0
  constructor(private http: HttpClient) {
    this.http.get('http://localhost:3000/baskets').subscribe((res: any) => {

      this.changeCartCount(res.length)
    })
  }

  cartCount = new BehaviorSubject<number>(this.totalCart)

  public get Data(): Observable<number> {
    return this.cartCount.asObservable();
  }

  changeCartCount(newVar: number) {
    this.cartCount.next(newVar)
  }
}
