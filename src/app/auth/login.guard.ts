import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { StoreService } from "../common/service/store.service";

@Injectable()

export class LoginGuard implements CanActivate {

  routerS: Router

  constructor(
    private router: Router,
    private storeService: StoreService
  ) {
    this.routerS = router
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    let user = this.storeService.getUser()
    console.log('?');

    if (!user.roles) {
      return this.routerS.navigate(['/login'])
    }


    // const contains = user.roles.some((element: any) => {
    //   return route.data['roles'].includes(element);
    // });


    if (this.storeService.getAccessToken()) {
      return true
    }

    return this.routerS.navigate(['/login'])

  }
}
