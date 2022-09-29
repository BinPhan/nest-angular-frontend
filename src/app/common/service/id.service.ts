import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdService {

  constructor() { }

  id = 0


  public getID(): number {
    return ++this.id;
  }

}
