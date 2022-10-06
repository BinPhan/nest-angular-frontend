import { Injectable } from '@angular/core';

const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  clean(): void {
    localStorage.clear();
  }

  public saveUser(user: any): void {
    localStorage.removeItem(USER_KEY);
    localStorage.setItem(USER_KEY, user);
  }

  public getUser(): any {
    const user = localStorage.getItem(USER_KEY);
    if (user) {
      return user;
    }

    return {};
  }

  public isLoggedIn(): boolean {
    const user = localStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }

    return false;
  }

  /**
   * getAccessToken
   */
  public getAccessToken(): string {
    return this.getUser()
  }
}
