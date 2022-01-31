import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() cand;
  @Output() msgToList = new EventEmitter<Candidat>();
  constructor() {}

  ngOnInit(): void {}

  sendToList() {
    this.msgToList.emit(this.cand);
  }
}
