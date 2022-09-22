import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() item: any
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  addToCart(item: any) {
    console.log(item);
    let body = {
      quantity: 1,
      price: item.price,
      amount: item.price,
      product: item
    }
    this.http.post('http://localhost:3000/baskets', body).subscribe()
  }
}
