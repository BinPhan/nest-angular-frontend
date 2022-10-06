import { HttpClient } from "@angular/common/http"
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing"
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { Data } from "@angular/router"
import { Observable, of } from "rxjs"
import { CartComponent } from "./cart.component"

describe('Cart component', () => {
  let component: CartComponent
  let fixture: ComponentFixture<CartComponent>

  // let httpMock: jasmine.SpyObj<HttpClient>

  let httpClient: HttpClient
  let httpTestingController: HttpTestingController

  beforeEach(async () => {

    // httpMock = jasmine.createSpyObj('HttpClient', ['get'])

    await TestBed.configureTestingModule({
      declarations: [CartComponent],
      // providers: [{
      //   provide: HttpClient,
      //   useValue: httpMock
      // }],
      imports: [HttpClientTestingModule]
    })
      .compileComponents()

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  beforeEach(() => {
    const testData: Data = [
      { amount: 1 },
      { amount: 1 },
      { amount: 1 },
    ];


    // httpClient.get<Data>('http://localhost:3000/baskets').subscribe(data => {
    //   expect(data).toBeTruthy()
    // })
    const req = httpTestingController.expectOne('http://localhost:3000/baskets');

    // Assert that the request is a GET.
    expect(req.request.method).toEqual('GET');
    req.flush(testData);
    httpTestingController.verify();
  })

  it('Should create', () => {
    expect(component).toBeTruthy()
  })

  // afterEach(() => {
  //   // After every test, assert that there are no more pending requests.

  // });

  it('Should update quantity', () => {
    component.updateQuantity({ target: { value: 1 } }, { quantity: 1, price: 1 })
  })

  it('Shold remove item', () => {

    const test = component.removeItem({
      id: 1
    })
    // spyOn(component, 'fetch').and.returnValue(undefined)

    const testData: Data = {}
    const req = httpTestingController.expectOne('http://localhost:3000/baskets/1')

    expect(req.request.method).toEqual('DELETE')
    req.flush(testData)
    httpTestingController.verify();

  })

  it('Should do the rest', () => {
    component.saveAll()
    component.setItem(123)
    component.setQuantity(123)
  })
})
