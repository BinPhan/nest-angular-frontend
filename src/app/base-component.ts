import { StoreService } from "./store.service";

export class BaseComponent {
  protected isLoggedIn: Boolean

  constructor(
    protected storeService: StoreService
  ) {

    this.isLoggedIn = this.storeService.isLoggedIn()
  }
}
