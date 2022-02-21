import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SecondService {
  constructor() {}

  showMsgSecond() {
    console.log('Je suis le second Service');
  }
}
