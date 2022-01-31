import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
})
export class ListeComponent implements OnInit {
  @Input() candidates = [];
  @Output() msgToCv = new EventEmitter<Candidat>();
  constructor() {}

  ngOnInit(): void {}

  sendToCv(myCandidat) {
    this.msgToCv.emit(myCandidat);
  }
}
