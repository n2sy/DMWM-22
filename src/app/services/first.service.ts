import { Injectable } from '@angular/core';
import { SecondService } from './second.service';

@Injectable({
  providedIn: 'root',
})
export class FirstService {
  constructor(private secondSer: SecondService) {}

  showMsg() {
    console.log('Je suis le premier service !!!!!!');
    this.secondSer.showMsgSecond();
  }
}
