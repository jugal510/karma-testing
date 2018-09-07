import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() {}
   static add(a, b) {
    return a + b;
  }
}
