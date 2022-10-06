import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EventEmitter } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemComponent } from './cart-item.component';

describe('CartItemComponent', () => {
  let component: CartItemComponent;
  let fixture: ComponentFixture<CartItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartItemComponent],
      providers: [],
      imports: [HttpClientTestingModule]

    })
      .compileComponents();

    fixture = TestBed.createComponent(CartItemComponent);
    component = fixture.componentInstance;

    let element = fixture.debugElement.nativeElement
    component.item = {
      product: [
        { image: '', title: 'Test' },

      ],
      price: '123', amount: 1, quantity: 1
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('UpdateQuantity', () => {
    component.updateQuantity({ target: { value: 1 } }, { quantity: 1, price: 1 })
  })
});
