import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router"
import { StoreService } from "../common/service/store.service";
import { LoginGuard } from "./login.guard"

describe('LoginGuard', () => {

  let guard: LoginGuard
  let routerSpy: jasmine.SpyObj<Router>;
  const dummyRoute = {} as ActivatedRouteSnapshot;
  const fakeUrls = ['/', '/admin', '/crisis-center', '/a/deep/route'];

  function fakeRouterState(url: string): RouterStateSnapshot {
    return {
      url,
    } as RouterStateSnapshot;
  }

  beforeEach(() => {
    routerSpy = jasmine.createSpyObj<Router>('Router', ['navigate']);

    guard = new LoginGuard(routerSpy, new StoreService)
  })

  it('Can active', () => {
    const canActivate = guard.canActivate(dummyRoute, fakeRouterState('/login'));

    expect(canActivate)
  })

})
