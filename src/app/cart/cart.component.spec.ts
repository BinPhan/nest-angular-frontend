import { HttpClient } from "@angular/common/http"
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { CartComponent } from "./cart.component"

describe('Cart component', () => {
  let component: CartComponent
  let fixture: ComponentFixture<CartComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('Should create', () => {
    expect(component).toBeTruthy()
  })
})
