import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base-component';
import { StoreService } from '../../service/store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends BaseComponent implements OnInit {

  constructor(private store: StoreService) {
    super(store)
  }

  ngOnInit(): void {
  }

}
