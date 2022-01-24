import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  name: string = 'Oussama';
  age: number = 33;
  Firstcolor = 'grey';
  show = false;
  constructor() {}

  ngOnInit(): void {}

  traitement() {
    alert("J'ai été clické");
  }

  traitementDuParent(msg) {
    alert(msg);
  }
}
