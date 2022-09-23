import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base-component';
import { StoreService } from '../../service/store.service';
import { CartCountService } from '../../service/cart-count.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends BaseComponent implements OnInit {

  cartCount: Number = 0

  constructor(private store: StoreService, private cartCountService: CartCountService) {
    super(store)
  }

  ngOnInit(): void {
    this.cartCountService.cartCount.subscribe((res: any) => {
      console.log(res);

      this.cartCount = res
    })
  }

}
