import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  name: string = 'Oussama';
  age: number = 33;
  color = 'pink';
  show = false;
  constructor() {}

  ngOnInit(): void {}

  traitement() {
    alert("J'ai été clické");
  }
}
