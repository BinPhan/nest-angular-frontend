import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private http: HttpClient) { }

  totalBasket: number = 0
  cartItem: Array<any> = []
  ngOnInit(): void {
    this.fetch()
  }

  fetch() {
    this.http.get('http://localhost:3000/baskets').subscribe((res: any) => {
      this.cartItem = res
      this.totalBasket = this.cartItem.reduce((prev, current) => {

        return +prev + Number(current?.amount)
      }, 0)
    })
  }

  updateQuantity(event: any, item: any) {
    item.quantity = event.target.value
    item.amount = item.quantity * item.price
    // this.http.put(`http://localhost:3000/baskets/${item.id}`, item).subscribe(
    //   res => {
    //     this.totalBasket = this.cartItem.reduce((prev, current) => {

    //       return +prev + current?.amount
    //     }, 0)
    //   }
    // )
  }

  removeItem(item: any) {
    this.http.delete(`http://localhost:3000/baskets/${item.id}`).subscribe(res => {
      this.cartItem = this.cartItem.filter(arrItem => { return arrItem.id != item.id })
    })
  }

  saveAll() {
    console.log(this.cartItem);

  }

  setItem(event: any) {
    console.log(event);

  }

  setQuantity(event: any) {
    console.log(event);
    console.log(this.cartItem);

    // this.totalBasket = this.cartItem.reduce((prev, current) => {

    //   return +prev + Number(current?.amount)
    // }, 0)
  }
}
