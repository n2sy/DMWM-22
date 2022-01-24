import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() color = 'pink';
  @Output() msgToParent = new EventEmitter<string>(); // <string> facultatif
  constructor() {}

  ngOnInit(): void {}

  sendMsg() {
    this.msgToParent.emit("Je suis un message envoyé par l'enfant");
  }
}
