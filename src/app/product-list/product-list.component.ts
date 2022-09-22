import { Component, OnInit } from '@angular/core';
import { ProductListService } from './product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private productListService: ProductListService) {

  }

  listProduct: any

  ngOnInit(): void {
    this.productListService.getList().subscribe(res => this.listProduct = res)
  }

}
