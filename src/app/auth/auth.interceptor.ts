import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { StoreService } from "../common/service/store.service";

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
  constructor(private storeService: StoreService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'Authorization': `Bearer ${this.storeService.getAccessToken()}`
      }
    })
    return next.handle(req)
  }
}
