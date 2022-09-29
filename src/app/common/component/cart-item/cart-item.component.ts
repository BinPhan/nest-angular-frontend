import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() item: any
  @Input() cartItem: any

  @Output() updateItemEvent = new EventEmitter<any>()
  @Output() updateQuantityEvent = new EventEmitter<any>()

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  updateQuantity(event: any, item: any) {
    item.quantity = event.target.value
    item.amount = item.quantity * item.price
    this.updateItemEvent.emit(item)
    this.updateQuantityEvent.emit(item.quantity)
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
      this.cartItem = this.cartItem.filter((arrItem: any) => { return arrItem.id != item.id })
    })
  }

}
