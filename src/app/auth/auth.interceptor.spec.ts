import { HttpClient, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http"
import { TestBed } from "@angular/core/testing"
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing"
import { AuthInterceptor } from "./auth.interceptor"
import { StoreService } from "../common/service/store.service"
import { Observable } from "rxjs"

describe('AuthInterceptor', () => {
  let client: HttpClient
  let httpMock: HttpTestingController
  let service: StoreService

  beforeEach(() => {
    TestBed.configureTestingModule({
      // imports: [
      //   HttpClientTestingModule,
      // ],
      // providers: [
      //   {
      //     provide: HTTP_INTERCEPTORS,
      //     useClass: AuthInterceptor,
      //     multi: true
      //   },
      // ]
    })

    // service = TestBed.inject(StoreService)
    // client = TestBed.inject(HttpClient)
    // controller = TestBed.inject(HttpTestingController)
  })

  it('Should add a header to request', () => {
    let auth = new AuthInterceptor(new StoreService())

    const next: any = {
      handle: () => {
        return Observable.create((subscriber: any) => {
          subscriber.complete();
        });
      }
    };

    const requestMock = new HttpRequest('GET', '/test');

    auth.intercept(requestMock, next).subscribe(() => {

    });

  })
})
