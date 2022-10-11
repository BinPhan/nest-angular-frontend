import { TestBed } from "@angular/core/testing";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router"
import { StoreService } from "../common/service/store.service";
import { LoginGuard } from "./login.guard"

describe('LoginGuard', () => {

  let guard: LoginGuard
  let routerSpy: jasmine.SpyObj<Router>;
  let dummyRoute: any;
  const fakeUrls = ['/', '/admin', '/crisis-center', '/a/deep/route'];

  let mockStoreService: any

  function fakeRouterState(url: string): RouterStateSnapshot {
    return {
      url,
    } as RouterStateSnapshot;
  }

  beforeEach(() => {
    routerSpy = jasmine.createSpyObj<Router>('Router', ['navigate']);
    dummyRoute = jasmine.createSpyObj<ActivatedRouteSnapshot>('ActivatedRouteSnapshot', ['toString'], { 'data': { roles: ['ADMIN'] } });

    mockStoreService = jasmine.createSpyObj('StoreService', ['getUser', 'getAccessToken'])

    // guard = new LoginGuard(routerSpy, mockStoreService)

    TestBed.configureTestingModule({
      providers: [{
        provide: StoreService,
        useValue: mockStoreService
      }]
    })

    guard = new LoginGuard(routerSpy, TestBed.inject<StoreService>(StoreService))


  })

  it('Can active without user', () => {

    routerSpy.navigate.and.returnValue(Promise.resolve(true))
    mockStoreService.getUser.and.returnValue(
      {
        roles: false
      }
    )

    dummyRoute.data = {
      roles: ["ADMIN"]
    }
    const canActivate = guard.canActivate(dummyRoute, fakeRouterState('/user-list'));

    // spyOn(routerSpy, 'navigate').and.returnValue(Promise.resolve(true))
    expect(canActivate).toBeInstanceOf(Promise<boolean>)
  })

  it('Can active with user with right role', () => {
    // let mockStoreService = jasmine.createSpyObj('StoreService', ['getUser'])
    // // spyOn(mockStoreService, 'getUser').and.returnValue({
    // //   roles: ["ADMIN"]
    // // })
    // mockStoreService.getUser.and.returnValue({
    //   roles: ["ADMIN"]
    // })

    // console.log(mockStoreService);

    mockStoreService.getUser.and.returnValue({
      roles: ["ADMIN"]
    })
    mockStoreService.getAccessToken.and.returnValue('$2321')

    const canActivate = guard.canActivate(dummyRoute, fakeRouterState('/login'));

    expect(canActivate).toBeTrue()
  })

  it('Has user but no access token', () => {
    mockStoreService.getUser.and.returnValue({
      roles: ["ADMIN"]
    })
    mockStoreService.getAccessToken.and.returnValue(false)

    const canActivate = guard.canActivate(dummyRoute, fakeRouterState('/login'));

    expect(canActivate)
  })

})
