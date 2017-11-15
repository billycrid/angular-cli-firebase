import { Injectable } from '@angular/core';

@Injectable()
export class UserFactoryService {
  user: any;
  constructor() { }

  getUser() {
      return this.user;
  }

}
