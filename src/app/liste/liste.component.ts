import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Candidat } from '../models/candidat';
import { ListCandidatsService } from '../services/list-candidats.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
})
export class ListeComponent implements OnInit {
  @Input() candidates = [];
  @Output() msgToCv = new EventEmitter<Candidat>();
  constructor(private listCand: ListCandidatsService) {}

  ngOnInit(): void {
    this.candidates = this.listCand.getAllCandidats();
  }

  sendToCv(myCandidat) {
    this.msgToCv.emit(myCandidat);
  }

  showListCandidat() {
    console.log(this.listCand.getAllCandidats());
  }
}
